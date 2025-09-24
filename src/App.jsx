import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      
      {/* Point light */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4299e1" />
      
      {/* A simple glass-like sphere as a placeholder */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.1}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#e2e8f0"
          ior={1.4}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Camera controls */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Spline Liquid Glass Test</h1>
        <p>Testing Liquid Glass effects with react-three/fiber</p>
      </div>
      
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="info">
        <p>
          This is a boilerplate project for testing liquid glass effects using:
        </p>
        <ul>
          <li>React Three Fiber</li>
          <li>React Three Drei</li>
          <li>Three.js</li>
          <li>Spline integration</li>
        </ul>
      </div>
    </div>
  )
}

export default App
