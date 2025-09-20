'use client';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
  const { scene } = useGLTF('/models/redfort_base_basic_shaded.glb')
  return <primitive object={scene} scale={1} />
}

export default function RedFort() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Model */}
        <Model />

        {/* Controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}
