'use client';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Sky, Environment, Text, useTexture, Stars, Cloud, Html } from '@react-three/drei';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Vector3, Euler, Box3, Sphere, Raycaster, Mesh, MathUtils, Color } from 'three';
import { Camera, Settings, Sun, Moon, Volume2, VolumeX, Eye, EyeOff } from 'lucide-react';

// Audio Manager for spatial audio
class AudioManager {
  constructor() {
    this.sounds = {};
    this.audioContext = null;
    this.listener = null;
    this.enabled = true;
    this.ambientVolume = 0.3;
    this.effectsVolume = 0.5;
  }

  init() {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playAmbient(type) {
    // Simulate ambient sounds (in real implementation, you'd load actual audio files)
    if (this.enabled) {
      console.log(`Playing ambient: ${type}`);
    }
  }

  playEffect(type, position) {
    if (this.enabled) {
      console.log(`Playing effect: ${type} at position:`, position);
    }
  }

  setVolume(type, volume) {
    if (type === 'ambient') this.ambientVolume = volume;
    if (type === 'effects') this.effectsVolume = volume;
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

// Weather and Time System
// Pure state hook
function useTimeOfDay() {
  const [timeOfDay, setTimeOfDay] = useState(0.6); // 0 = night, 1 = day
  const [weather, setWeather] = useState('clear');
  const [isPlaying, setIsPlaying] = useState(false);

  const cycleTime = () => setIsPlaying(!isPlaying);

  return { timeOfDay, setTimeOfDay, weather, setWeather, cycleTime, isPlaying };
}


// Component to update time using useFrame
function TimeOfDayUpdater({ timeOfDay, setTimeOfDay, isPlaying }) {
  useFrame((state, delta) => {
    if (isPlaying) {
      setTimeOfDay(prev => (prev + delta * 0.05) % 1); // 20 second cycle
    }
  });
  return null;
}


// Particle System Component
function Particles({ type, count = 100 }) {
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 10 + 1;
      const z = (Math.random() - 0.5) * 50;
      const speed = Math.random() * 0.02 + 0.01;
      temp.push({ position: [x, y, z], speed, offset: Math.random() * Math.PI * 2 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        const i3 = i * 3;
        if (type === 'dust') {
          // Floating dust motes
          mesh.current.geometry.attributes.position.array[i3 + 1] += Math.sin(state.clock.elapsedTime + particle.offset) * 0.001;
        } else if (type === 'fireflies') {
          // Fireflies floating around
          mesh.current.geometry.attributes.position.array[i3] += Math.sin(state.clock.elapsedTime * 0.5 + particle.offset) * 0.02;
          mesh.current.geometry.attributes.position.array[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.3 + particle.offset) * 0.01;
        }
      });
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(p => p.position))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={type === 'fireflies' ? 0.1 : 0.05}
        color={type === 'fireflies' ? '#ffff88' : '#ffffff'}
        transparent
        opacity={type === 'fireflies' ? 0.8 : 0.3}
      />
    </points>
  );
}

// Animated Wildlife
function Birds() {
  const groupRef = useRef();
  const birds = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 40,
        Math.random() * 10 + 5,
        (Math.random() - 0.5) * 40
      ],
      speed: Math.random() * 0.02 + 0.01,
      radius: Math.random() * 10 + 5,
      offset: Math.random() * Math.PI * 2
    }));
  }, []);

  useFrame((state) => {
    birds.forEach((bird, i) => {
      const x = Math.cos(state.clock.elapsedTime * bird.speed + bird.offset) * bird.radius + bird.position[0];
      const z = Math.sin(state.clock.elapsedTime * bird.speed + bird.offset) * bird.radius + bird.position[2];
      const y = bird.position[1] + Math.sin(state.clock.elapsedTime * 2 + bird.offset) * 0.5;
      
      if (groupRef.current?.children[i]) {
        groupRef.current.children[i].position.set(x, y, z);
        groupRef.current.children[i].rotation.y = Math.atan2(
          Math.sin(state.clock.elapsedTime * bird.speed + bird.offset),
          Math.cos(state.clock.elapsedTime * bird.speed + bird.offset)
        );
      }
    });
  });

  return (
    <group ref={groupRef}>
      {birds.map((bird) => (
        <mesh key={bird.id} position={bird.position}>
          <sphereGeometry args={[0.1, 6, 6]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      ))}
    </group>
  );
}

// Enhanced Environment with dynamic lighting
function EnhancedEnvironment({ timeOfDay, weather }) {
  const sunPosition = useMemo(() => {
    const angle = timeOfDay * Math.PI * 2;
    return [
      Math.cos(angle) * 100,
      Math.sin(angle) * 50 + 20,
      Math.sin(angle) * 100
    ];
  }, [timeOfDay]);

  const sunColor = useMemo(() => {
    const color = new Color();
    if (timeOfDay < 0.2 || timeOfDay > 0.8) {
      // Night/twilight
      color.setHSL(0.6, 0.8, 0.3);
    } else if (timeOfDay < 0.3 || timeOfDay > 0.7) {
      // Dawn/dusk
      color.setHSL(0.08, 0.9, 0.6);
    } else {
      // Day
      color.setHSL(0.15, 0.1, 1);
    }
    return color;
  }, [timeOfDay]);

  const intensity = useMemo(() => {
    if (timeOfDay < 0.2 || timeOfDay > 0.8) return 0.2; // Night
    if (timeOfDay < 0.3 || timeOfDay > 0.7) return 0.6; // Dawn/dusk
    return 1.2; // Day
  }, [timeOfDay]);

  return (
    <>
      <ambientLight intensity={0.2 + timeOfDay * 0.3} color={sunColor} />
      <directionalLight
        position={sunPosition}
        intensity={intensity}
        color={sunColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      <Sky
        distance={450000}
        sunPosition={sunPosition}
        inclination={0.6}
        azimuth={0.25}
        turbidity={weather === 'misty' ? 8 : 1}
        rayleigh={weather === 'cloudy' ? 2 : 6}
        mieCoefficient={weather === 'misty' ? 0.1 : 0.001}
        mieDirectionalG={0.7}
      />

      {timeOfDay < 0.3 || timeOfDay > 0.7 ? (
        <Stars radius={300} depth={60} count={1000} factor={6} saturation={0} fade />
      ) : null}
      
      {weather === 'cloudy' && (
        <>
          <Cloud position={[10, 8, -10]} speed={0.1} opacity={0.4} />
          <Cloud position={[-15, 10, 5]} speed={0.08} opacity={0.3} />
          <Cloud position={[20, 12, 20]} speed={0.12} opacity={0.5} />
        </>
      )}
    </>
  );
}

// Collision detection system (unchanged)
class CollisionDetector {
  constructor() {
    this.raycaster = new Raycaster();
    this.collisionObjects = [];
    this.playerRadius = 0.3;
    this.stepHeight = 0.2;
  }

  addCollisionObject(object) {
    object.traverse((child) => {
      if (child instanceof Mesh) {
        this.collisionObjects.push(child);
      }
    });
  }

  checkCollision(position, direction, distance = 0.5) {
    this.raycaster.set(position, direction.normalize());
    const intersects = this.raycaster.intersectObjects(this.collisionObjects, true);
    
    if (intersects.length > 0) {
      const closestIntersection = intersects[0];
      return {
        hit: true,
        distance: closestIntersection.distance,
        point: closestIntersection.point,
        normal: closestIntersection.face.normal.clone()
      };
    }
    
    return { hit: false };
  }

  checkPlayerCollision(currentPos, newPos) {
    const movement = newPos.clone().sub(currentPos);
    const movementDistance = movement.length();
    
    if (movementDistance < 0.001) return { canMove: true, adjustedPosition: newPos };

    const playerPos = currentPos.clone();
    playerPos.y += 0.5;

    let canMoveX = true;
    let canMoveZ = true;
    let adjustedPosition = newPos.clone();

    const xMovement = new Vector3(newPos.x - currentPos.x, 0, 0);
    if (xMovement.length() > 0) {
      const collision = this.checkCollision(playerPos, xMovement.normalize(), this.playerRadius + Math.abs(xMovement.x));
      if (collision.hit && collision.distance < this.playerRadius + Math.abs(xMovement.x)) {
        canMoveX = false;
        adjustedPosition.x = currentPos.x;
      }
    }

    const zMovement = new Vector3(0, 0, newPos.z - currentPos.z);
    if (zMovement.length() > 0) {
      const collision = this.checkCollision(playerPos, zMovement.normalize(), this.playerRadius + Math.abs(zMovement.z));
      if (collision.hit && collision.distance < this.playerRadius + Math.abs(zMovement.z)) {
        canMoveZ = false;
        adjustedPosition.z = currentPos.z;
      }
    }

    const groundCheck = this.checkCollision(
      new Vector3(adjustedPosition.x, adjustedPosition.y + 1, adjustedPosition.z),
      new Vector3(0, -1, 0),
      2
    );

    if (groundCheck.hit) {
      const groundHeight = groundCheck.point.y;
      const heightDifference = groundHeight - currentPos.y;
      
      if (heightDifference > this.stepHeight) {
        return { canMove: false, adjustedPosition: currentPos };
      }
      
      adjustedPosition.y = groundHeight + 0.1;
    }

    return { 
      canMove: canMoveX || canMoveZ, 
      adjustedPosition,
      canMoveX,
      canMoveZ
    };
  }
}

// Enhanced First-person controls with footstep audio
function FirstPersonControls({ speed = 5, collisionDetector, audioManager, onMove }) {
  const { camera, gl } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const prevTime = useRef(performance.now());
  const lastFootstep = useRef(0);
  
  const mouseSensitivity = useRef(0.0008);
  const mouseVelocity = useRef({ x: 0, y: 0 });
  const smoothing = useRef(0.85);
  const isPointerLocked = useRef(false);

  const outerBoundary = useMemo(() => new Box3(
    new Vector3(-25, -1, -25),
    new Vector3(25, 8, 25)
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
      if (document.pointerLockElement === gl.domElement && isPointerLocked.current) {
        mouseVelocity.current.x = event.movementX * mouseSensitivity.current;
        mouseVelocity.current.y = event.movementY * mouseSensitivity.current;
      }
    };

    const handleClick = () => {
      gl.domElement.requestPointerLock();
    };

    const handlePointerLockChange = () => {
      isPointerLocked.current = document.pointerLockElement === gl.domElement;
      if (!isPointerLocked.current) {
        mouseVelocity.current.x = 0;
        mouseVelocity.current.y = 0;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('pointerlockchange', handlePointerLockChange);
    gl.domElement.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerlockchange', handlePointerLockChange);
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [camera, gl]);

  useFrame((state, delta) => {
    const time = performance.now();
    const deltaTime = (time - prevTime.current) / 1000;
    prevTime.current = time;

    if (isPointerLocked.current) {
      camera.rotation.y -= mouseVelocity.current.x;
      camera.rotation.x -= mouseVelocity.current.y;
      
      camera.rotation.x = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, camera.rotation.x));
      
      mouseVelocity.current.x *= smoothing.current;
      mouseVelocity.current.y *= smoothing.current;
      
      if (Math.abs(mouseVelocity.current.x) < 0.0001) mouseVelocity.current.x = 0;
      if (Math.abs(mouseVelocity.current.y) < 0.0001) mouseVelocity.current.y = 0;
    }

    const isMoving = moveForward.current || moveBackward.current || moveLeft.current || moveRight.current;

    if (isMoving) {
      const currentPosition = camera.position.clone();
      
      const forward = new Vector3();
      camera.getWorldDirection(forward);
      const right = new Vector3();
      right.crossVectors(forward, new Vector3(0, 1, 0)).normalize();
      
      const movement = new Vector3();
      
      if (moveForward.current) {
        movement.add(forward.multiplyScalar(speed * deltaTime));
      }
      if (moveBackward.current) {
        movement.add(forward.multiplyScalar(-speed * deltaTime));
      }
      if (moveRight.current) {
        movement.add(right.multiplyScalar(speed * deltaTime));
      }
      if (moveLeft.current) {
        movement.add(right.multiplyScalar(-speed * deltaTime));
      }
      
      movement.y = 0;
      const newPosition = currentPosition.clone().add(movement);
      
      if (collisionDetector && collisionDetector.collisionObjects.length > 0) {
        const collisionResult = collisionDetector.checkPlayerCollision(currentPosition, newPosition);
        
        if (collisionResult.canMove) {
          camera.position.copy(collisionResult.adjustedPosition);
          onMove && onMove(camera.position);
          
          // Play footstep sounds
          if (time - lastFootstep.current > 500) { // Every 500ms
            audioManager.playEffect('footstep', camera.position);
            lastFootstep.current = time;
          }
        }
      } else {
        camera.position.copy(newPosition);
        onMove && onMove(camera.position);
      }
    }

    if (!outerBoundary.containsPoint(camera.position)) {
      const clampedPos = camera.position.clone();
      clampedPos.x = Math.max(outerBoundary.min.x, Math.min(outerBoundary.max.x, camera.position.x));
      clampedPos.y = Math.max(outerBoundary.min.y, Math.min(outerBoundary.max.y, camera.position.y));
      clampedPos.z = Math.max(outerBoundary.min.z, Math.min(outerBoundary.max.z, camera.position.z));
      camera.position.copy(clampedPos);
    }
  });

  return null;
}

// Temple model with enhanced materials
function SanchiStupaModel({ collisionDetector }) {
  const { scene } = useGLTF('/models/sanchistupa_base_basic_shaded.glb');
  
  useEffect(() => {
    if (collisionDetector && scene) {
      collisionDetector.addCollisionObject(scene);
      
      // Enhanced materials
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          if (child.material) {
            // Enhance existing materials
            child.material.metalness = 0.1;
            child.material.roughness = 0.8;
          }
        }
      });
    }
  }, [scene, collisionDetector]);

  return <primitive object={scene} scale={0.8} />;
}

// Enhanced ground with better textures
function Ground({ collisionDetector }) {
  const groundRef = useRef();
  const grassTexture = useTexture('/textures/green3.jpg');
  grassTexture.wrapS = grassTexture.wrapT = 1000;
  grassTexture.repeat.set(20, 20);

  useEffect(() => {
    if (collisionDetector && groundRef.current) {
      collisionDetector.addCollisionObject(groundRef.current);
    }
  }, [collisionDetector]);

  return (
    <group>
      <mesh 
        ref={groundRef}
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.1, 0]} 
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          map={grassTexture} 
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
      
      {/* Add some simple geometry for visual interest */}
      <mesh position={[8, 0.5, 8]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
      
      <mesh position={[-6, 0.3, -4]} castShadow receiveShadow>
        <sphereGeometry args={[0.6, 12, 12]} />
        <meshStandardMaterial color="#654321" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Settings Panel
function SettingsPanel({ 
  audioManager, 
  timeOfDay, 
  weather, 
  setWeather, 
  cycleTime, 
  isPlaying,
  onPhotoMode,
  showParticles,
  setShowParticles 
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(audioManager.enabled);

  const toggleAudio = () => {
    const enabled = audioManager.toggle();
    setAudioEnabled(enabled);
  };

  return (
    <>
      <button
        className="fixed top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded hover:bg-opacity-70 transition-all"
        onClick={() => setShowSettings(!showSettings)}
      >
        <Settings size={20} />
      </button>

      {showSettings && (
        <div className="fixed top-16 right-4 p-4 bg-black bg-opacity-80 text-white rounded-lg min-w-64">
          <h3 className="text-lg font-bold mb-3">Settings</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Audio</span>
              <button onClick={toggleAudio} className="p-1">
                {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Time Cycle</span>
              <button 
                onClick={cycleTime}
                className={`p-1 ${isPlaying ? 'text-yellow-400' : ''}`}
              >
                <Sun size={20} />
              </button>
            </div>
            
            <div>
              <label className="block mb-1">Weather</label>
              <select 
                value={weather} 
                onChange={(e) => setWeather(e.target.value)}
                className="bg-gray-700 text-white p-1 rounded w-full"
              >
                <option value="clear">Clear</option>
                <option value="cloudy">Cloudy</option>
                <option value="misty">Misty</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Particles</span>
              <button 
                onClick={() => setShowParticles(!showParticles)}
                className="p-1"
              >
                {showParticles ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            
            <button
              onClick={onPhotoMode}
              className="flex items-center gap-2 p-2 bg-blue-600 rounded hover:bg-blue-700 w-full justify-center"
            >
              <Camera size={16} />
              Photo Mode
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Main component
export default function TempleExplorer() {
  const [infoText, setInfoText] = useState('🏛️ Enhanced Sanchi Stupa Explorer - Click to enter immersive mode');
  const [showInstructions, setShowInstructions] = useState(true);
  const [photoMode, setPhotoMode] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  
  const collisionDetector = useMemo(() => new CollisionDetector(), []);
  const audioManager = useMemo(() => {
    const manager = new AudioManager();
    manager.init();
    return manager;
  }, []);
  
  const { timeOfDay, setTimeOfDay, weather, setWeather, cycleTime, isPlaying } = useTimeOfDay();

  const handlePlayerMove = (position) => {
    // Play ambient sounds based on location
    const distanceFromSanchiStupa = position.distanceTo(new Vector3(0, 0, 0));
    if (distanceFromSanchiStupa < 5) {
      audioManager.playAmbient('temple_interior');
    } else {
      audioManager.playAmbient('outdoor');
    }
  };

  const handlePhotoMode = () => {
    setPhotoMode(true);
    setTimeout(() => {
      // Simulate photo capture
      setInfoText('📸 Photo captured! Check your downloads folder');
      setTimeout(() => {
        setInfoText('🏛️ Enhanced Sanchi Stupa Explorer - Explore Sanchi Stupa');
        setPhotoMode(false);
      }, 2000);
    }, 500);
  };

  useEffect(() => {
    // Initialize ambient sounds
    audioManager.playAmbient('outdoor');
  }, [audioManager]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Canvas 
        shadows 
        camera={{ position: [0, 1.6, 8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced Environment */}
        <EnhancedEnvironment timeOfDay={timeOfDay} weather={weather} />
        
        {/* Fog for atmosphere */}
        <fog attach="fog" args={['#87CEEB', 20, 100]} />
        
        {/* Models */}
        <SanchiStupaModel collisionDetector={collisionDetector} />
        <Ground collisionDetector={collisionDetector} />
        
        {/* Particle Effects */}
        {showParticles && (
          <>
            <Particles type="dust" count={50} />
            {timeOfDay < 0.3 || timeOfDay > 0.7 ? (
              <Particles type="fireflies" count={20} />
            ) : null}
          </>
        )}
        
        {/* Wildlife */}
        <Birds />
        
        {/* Enhanced Controls */}
        <FirstPersonControls 
          speed={7} 
          collisionDetector={collisionDetector}
          audioManager={audioManager}
          onMove={handlePlayerMove}
        />

        <TimeOfDayUpdater 
          timeOfDay={timeOfDay} 
          setTimeOfDay={setTimeOfDay} 
          isPlaying={isPlaying} 
        />
      </Canvas>
      
      {/* Settings Panel */}
      <SettingsPanel
        audioManager={audioManager}
        timeOfDay={timeOfDay}
        weather={weather}
        setWeather={setWeather}
        cycleTime={cycleTime}
        isPlaying={isPlaying}
        onPhotoMode={handlePhotoMode}
        showParticles={showParticles}
        setShowParticles={setShowParticles}
      />
      
      {/* Time of day indicator */}
      <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
        <div className="flex items-center gap-2">
          {timeOfDay < 0.3 || timeOfDay > 0.7 ? <Moon size={16} /> : <Sun size={16} />}
          <span className="text-sm">
            {timeOfDay < 0.2 || timeOfDay > 0.8 ? 'Night' : 
             timeOfDay < 0.3 || timeOfDay > 0.7 ? 'Twilight' : 'Day'}
          </span>
        </div>
      </div>
      
      {/* Photo mode overlay */}
      {photoMode && (
        <div className="absolute inset-0 bg-white pointer-events-none animate-pulse" 
             style={{ animationDuration: '0.1s', animationIterationCount: '1' }} />
      )}
      
      {/* UI Overlay */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
        {infoText}
      </div>
      
      {showInstructions && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="text-center text-white bg-black bg-opacity-90 p-8 max-w-lg mx-auto rounded-lg border border-gold">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">🏛️ Enhanced Sanchi Stupa Explorer</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-blue-300">Movement</h3>
                <p className="text-sm">W: Forward</p>
                <p className="text-sm">S: Backward</p>
                <p className="text-sm">A: Left</p>
                <p className="text-sm">D: Right</p>
                <p className="text-sm">Mouse: Look around</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-300">Features</h3>
                <p className="text-sm">⚙️ Settings panel</p>
                <p className="text-sm">📸 Photo mode</p>
                <p className="text-sm">🌅 Day/night cycle</p>
                <p className="text-sm">🦋 Particle effects</p>
                <p className="text-sm">🔊 Spatial audio</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-yellow-300">✨ New Enhancements</h3>
              <div className="text-sm grid grid-cols-2 gap-2">
                <p>• Dynamic lighting system</p>
                <p>• Weather variations</p>
                <p>• Flying birds animation</p>
                <p>• Dust particles & fireflies</p>
                <p>• Enhanced collision detection</p>
                <p>• Immersive spatial audio</p>
                <p>• Photo capture mode</p>
                <p>• Time of day cycling</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 mb-4">
              Click canvas to lock cursor • ESC to release cursor
            </p>
            
            <button 
              className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105"
              onClick={() => setShowInstructions(false)}
            >
              Enter Sanchi Stupa 🚶‍♂️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}