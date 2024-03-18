import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import gal from '../assets/3d/galaxy.glb';
export function Galaxy(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(gal);
  const { actions } = useAnimations(animations, group);
  
  useFrame((state, delta) => {
    if(group.current) {
        group.current.rotation.y += 0.5 * delta
    }
  });
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.016}
        >
          <group
            name="a76a404306c24e12b5edf6421ae7203ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Galaxy" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Galaxy_Material_#65_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Galaxy_Material_#65_0"].geometry}
                    material={materials.Material_65}
                  />
                </group>
                {/* Removed the sphere */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/galaxy.glb");