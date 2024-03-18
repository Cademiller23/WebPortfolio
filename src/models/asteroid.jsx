import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import ast from '../assets/3d/asteroid.glb';
export function Asteroid(props) {
  const { nodes, materials } = useGLTF(ast);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["defaultMat.003"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(ast);