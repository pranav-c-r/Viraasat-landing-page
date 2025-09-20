'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Sky, Environment, Text, useTexture } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Vector3, Euler, Box3, Sphere } from 'three';

// First-person controls with WASD + mouse
function FirstPersonControls({ speed = 5 }) {
  const { camera, gl } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const velocity = useRef(new Vector3());
  const direction = useRef(new Vector3());
  const prevTime = useRef(performance.now());

  // Collision boundaries (simplified as a box)
  const boundary = useMemo(() => new Box3(
    new Vector3(-10, 0, -10),
    new Vector3(10, 5, 10)
  ), []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW': moveForward.current = true; break;
        case 'KeyS': moveBackward.current = true; break;
        case 'KeyA': moveLeft.current = true; break;
        case 'KeyD': moveRight.current = true; break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW': moveForward.current = false; break;
        case 'KeyS': moveBackward.current = false; break;
        case 'KeyA': moveLeft.current = false; break;
        case 'KeyD': moveRight.current = false; break;
      }
    };

    const handleMouseMove = (event) => {
      // Only rotate when pointer is locked (clicked on canvas)
      if (document.pointerLockElement === gl.domElement) {
        camera.rotation.y -= event.movementX * 0.002;
        camera.rotation.x -= event.movementY * 0.002;
        
        // Limit vertical rotation
        camera.rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, camera.rotation.x));
      }
    };

    const handleClick = () => {
      gl.domElement.requestPointerLock();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousemove', handleMouseMove);
    gl.domElement.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [camera, gl]);

  useFrame((state, delta) => {
    const time = performance.now();
    const deltaTime = (time - prevTime.current) / 1000;
    prevTime.current = time;

    velocity.current.x -= velocity.current.x * 10.0 * deltaTime;
    velocity.current.z -= velocity.current.z * 10.0 * deltaTime;

    direction.current.z = Number(moveForward.current) - Number(moveBackward.current);
    direction.current.x = Number(moveRight.current) - Number(moveLeft.current);
    direction.current.normalize();

    if (moveForward.current || moveBackward.current) {
      velocity.current.z -= direction.current.z * speed * deltaTime;
    }
    if (moveLeft.current || moveRight.current) {
      velocity.current.x -= direction.current.x * speed * deltaTime;
    }

    // Apply movement with collision detection
    const newPosition = camera.position.clone();
    camera.translateX(velocity.current.x * deltaTime);
    camera.translateZ(velocity.current.z * deltaTime);
    
    // Simple collision detection - prevent moving outside boundaries
    if (!boundary.containsPoint(camera.position)) {
      camera.position.copy(newPosition);
    }
  });

  return null;
}

// Optimized temple model with simplified geometry
function TempleModel() {
  const { scene } = useGLTF('/models/suntemple_base_basic_shaded.glb');
  
  // Create collision geometry for walls
  const walls = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    return box;
  }, [scene]);

  return <primitive object={scene} scale={0.8} />;
}

// Ground plane with shadows
function Ground() {
  const groundTexture = useTexture('/textures/green3.jpg');
  groundTexture.wrapS = groundTexture.wrapT = 1000;
  groundTexture.repeat.set(10, 10);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={groundTexture} />
    </mesh>
  );
}

// Main component
export default function TempleExplorer() {
  const [infoText, setInfoText] = useState('Click to explore the Sun Temple');
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <div className="w-full h-screen relative">
      <Canvas shadows camera={{ position: [0, 1.6, 5], fov: 75 }}>
        {/* Environment */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset="sunset" />
        
        {/* Sky */}
        <Sky 
          distance={450000} 
          sunPosition={[0, 1, 0]} 
          turbidity={8} 
          rayleigh={6} 
          mieCoefficient={0.005} 
          mieDirectionalG={0.8} 
        />

        {/* Models */}
        <TempleModel />
        <Ground />
        
        {/* Controls */}
        <FirstPersonControls speed={7} />
      </Canvas>
      
      {/* UI Overlay */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
        {infoText}
      </div>
      
      {showInstructions && (
        <div className="absolute top-4 left-0 right-0 text-center text-white bg-black bg-opacity-70 p-4 max-w-md mx-auto rounded">
          <h3 className="text-lg font-bold mb-2">Controls</h3>
          <p>WASD: Move around</p>
          <p>Mouse: Look around</p>
          <p>Click: Interact with objects</p>
          <button 
            className="mt-3 px-4 py-2 bg-blue-500 rounded"
            onClick={() => setShowInstructions(false)}
          >
            Got it!
          </button>
        </div>
      )}
    </div>
  );
}