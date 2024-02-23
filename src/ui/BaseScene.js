import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Loader, PointerLockControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Lights from '../components/Lights.js';
import Floor from '../components/Floor.js';

const DrawingTool = () => {
  const { camera } = useThree();
  const [drawing, setDrawing] = useState(false);
  const points = useRef([]);

  const handlePointerDown = (event) => {
    setDrawing(true);
    points.current.push(event.point);
  };

  const handlePointerMove = (event) => {
    if (drawing) {
      points.current.push(event.point);
    }
  };

  const handlePointerUp = () => {
    setDrawing(false);
  };

  useFrame(() => {
    // Your drawing logic here (update the drawn lines)
  });

  return (
    <mesh
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Your drawing geometry here */}
    </mesh>
  );
};

const BasicScene = ({ children }) => {
  return (
    <div>
      <Canvas shadows camera={{ fov: 50 }}>
        <Lights />

        <Physics gravity={[0, -9.8, 0]}>
          {children}

          <Floor rotation={[Math.PI / -2, 0, 0]} color="#348C31" />
          <DrawingTool />
        </Physics>

        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
