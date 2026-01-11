import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectIslandProps {
  position?: [number, number, number];
  title: string;
  color?: string;
  onClick?: () => void;
}

export const ProjectIsland = ({
  position = [0, 0, 0],
  title,
  color = '#a855f7',
  onClick,
}: ProjectIslandProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} onClick={onClick}>
        {/* Glow effect */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.1}
            side={THREE.BackSide}
          />
        </mesh>
        
        {/* Main island */}
        <RoundedBox args={[2.5, 0.5, 2.5]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>
        
        {/* Core sphere */}
        <mesh position={[0, 0.8, 0]}>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Orbiting ring */}
        <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
          />
        </mesh>
        
        {/* Title */}
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/SpaceGrotesk-Bold.ttf"
        >
          {title}
        </Text>
      </group>
    </Float>
  );
};
