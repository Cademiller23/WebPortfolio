import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Sky({ isRotating }) {
  const { scene } = useThree(); // Hook to access the Three.js scene object
  const starFieldRef = useRef();

  useMemo(() => {
    // Set the background of the entire scene to black
    scene.background = new THREE.Color(0x000000);
  }, [scene]);

  // Generate random stars
  const { points } = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) { // Number of stars
      const x = THREE.MathUtils.randFloatSpread(2000); // Spread of stars
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Adjust the material color to white for the stars
    const material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 1.5, sizeAttenuation: true });
    const points = new THREE.Points(geometry, material);

    return { points };
  }, []);

  // Rotate the star field if isRotating is true
  useFrame((_, delta) => {
    if (isRotating && starFieldRef.current) {
      starFieldRef.current.rotation.y += delta * 0.1; // Adjust rotation speed as needed
    }
  });

  return <primitive ref={starFieldRef} object={points} dispose={null} />;
}