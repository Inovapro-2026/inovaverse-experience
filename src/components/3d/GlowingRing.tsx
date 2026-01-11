import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

interface GlowingRingProps {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  rotationSpeed?: number;
}

export const GlowingRing = ({
  position = [0, 0, 0],
  color = '#06b6d4',
  scale = 1,
  rotationSpeed = 0.5,
}: GlowingRingProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * rotationSpeed * 0.5;
    }
  });

  return (
    <Torus ref={meshRef} args={[1.5, 0.02, 16, 100]} scale={scale} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        transparent
        opacity={0.8}
      />
    </Torus>
  );
};
