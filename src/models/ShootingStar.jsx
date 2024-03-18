import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import ShootingScene from "../assets/3d/shooting_star.glb";

export function ShootingStar() {
  const starRef = useRef();
  const { nodes, materials } = useGLTF(ShootingScene);
  
  // Debugging logs to ensure we're getting the expected output
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  // Animation logic
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (starRef.current) {
      starRef.current.position.y = Math.sin(elapsedTime) * 5;
      starRef.current.position.z -= 0.5;
    }
  });

  // Using "Cube_001" for geometry and checking for the correct material names from the console log
  return (
    <group ref={starRef} scale={[0.1, 0.1, 0.1]} position={[0, 0, -10]}>
      {nodes.Cube_001 && (
        <mesh
          geometry={nodes.Cube_001.geometry}
          material={materials["Material-material"] ? materials["Material-material"] : undefined}
        />
      )}
    </group>
  );
}

useGLTF.preload(ShootingScene);