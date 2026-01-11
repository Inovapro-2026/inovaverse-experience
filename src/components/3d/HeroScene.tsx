import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { ParticleField } from './ParticleField';
import { FloatingOrb } from './FloatingOrb';
import { GlowingRing } from './GlowingRing';

export const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <ParticleField count={1000} color="#a855f7" size={0.015} spread={25} />
          <ParticleField count={400} color="#06b6d4" size={0.02} spread={20} />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <FloatingOrb position={[-4, 2, -5]} color="#a855f7" scale={0.8} />
          </Float>
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <FloatingOrb position={[4, -1, -3]} color="#3b82f6" scale={0.5} />
          </Float>
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <FloatingOrb position={[0, 3, -8]} color="#06b6d4" scale={1.2} distort={0.3} />
          </Float>
          
          <GlowingRing position={[0, 0, -5]} scale={2} rotationSpeed={0.3} />
          <GlowingRing position={[-3, -2, -7]} scale={1} rotationSpeed={0.5} color="#a855f7" />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
