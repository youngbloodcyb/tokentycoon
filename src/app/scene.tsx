"use client";

import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, MapControls } from "@react-three/drei";
import { Grid } from "./grid";

export function Scene() {
  return (
    <Canvas shadows>
      {/* Orthographic camera positioned for isometric view */}
      <OrthographicCamera
        makeDefault
        position={[20, 20, 20]}
        zoom={40}
        near={0.1}
        far={1000}
      />

      {/* Lock rotation — only allow zoom and pan */}
      <MapControls
        enableRotate={false}
        screenSpacePanning
        minZoom={10}
        maxZoom={200}
      />

      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      <Grid size={20} />
    </Canvas>
  );
}
