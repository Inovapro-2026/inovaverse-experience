import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { ParticleField } from './ParticleField';
import { ProjectIsland } from './ProjectIsland';

interface ProjectsSceneProps {
  onProjectClick?: (project: string) => void;
}

export const ProjectsScene = ({ onProjectClick }: ProjectsSceneProps) => {
  return (
    <div className="w-full h-[600px]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 3, 12]} fov={50} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, 5, 5]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[0, -5, 5]} intensity={0.5} color="#06b6d4" />
          
          <ParticleField count={800} color="#a855f7" size={0.01} spread={30} />
          
          <ProjectIsland 
            position={[-4.5, 0, 0]} 
            title="INOVABANK" 
            color="#a855f7"
            onClick={() => onProjectClick?.('inovabank')}
          />
          <ProjectIsland 
            position={[0, 0, 0]} 
            title="INOVAHUB" 
            color="#3b82f6"
            onClick={() => onProjectClick?.('inovahub')}
          />
          <ProjectIsland 
            position={[4.5, 0, 0]} 
            title="ISA" 
            color="#06b6d4"
            onClick={() => onProjectClick?.('isa')}
          />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
};
