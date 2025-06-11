// Simple 3D animated background using @react-three/fiber and drei
// You can further customize this for more sophistication
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MovingStars() {
  const stars1 = useRef<THREE.Points>(null);
  const stars2 = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (stars1.current && stars1.current.rotation) {
      stars1.current.rotation.y = t * 0.07;
      stars1.current.rotation.x = Math.sin(t * 0.13) * 0.05;
    }
    if (stars2.current && stars2.current.rotation) {
      stars2.current.rotation.y = -t * 0.04;
      stars2.current.rotation.x = Math.cos(t * 0.09) * 0.04;
    }
  });
  return (
    <>
      {/* @ts-ignore */}
      <Stars ref={stars1} radius={60} depth={120} count={3500} factor={5} saturation={0} fade speed={2.2} />
      {/* @ts-ignore */}
      <Stars ref={stars2} radius={20} depth={40} count={700} factor={2.2} saturation={0} fade speed={1.5} />
    </>
  );
}

export default function ThreeDBackground() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0, fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} shadows>
        <MovingStars />
        {/* Removed FadingAlgoLabels for a clean, glassy, black-and-white background */}
      </Canvas>
    </div>
  );
}
