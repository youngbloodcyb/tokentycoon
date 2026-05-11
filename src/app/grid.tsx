"use client";

import { Instances, Instance } from "@react-three/drei";
import { useMemo } from "react";

interface GridProps {
  size: number;
}

export function Grid({ size }: GridProps) {
  const tiles = useMemo(() => {
    const result = [];
    const offset = size / 2;
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        result.push({
          position: [x - offset, 0, z - offset] as [number, number, number],
          key: `${x}-${z}`,
        });
      }
    }
    return result;
  }, [size]);

  return (
    <Instances limit={size * size} castShadow receiveShadow>
      <boxGeometry args={[0.95, 0.1, 0.95]} />
      <meshStandardMaterial color="#ffffff" />
      {tiles.map((tile) => (
        <Instance key={tile.key} position={tile.position} />
      ))}
    </Instances>
  );
}
