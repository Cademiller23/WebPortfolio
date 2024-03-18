import React, { useRef, useEffect, useMemo} from 'react';
import * as THREE from 'three';
import { useFrame, extend, useThree, useLoader } from '@react-three/fiber';
import { useGLTF, useTexture } from '@react-three/drei';
import space from '../assets/3d/space_shuttle.glb';
import fire from "../assets/images/fire.jpg";
const vertexShader = `uniform float pointMultiplier;

attribute float size;
attribute float angle;
attribute vec4 colour;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size * pointMultiplier / gl_Position.w;
  vAngle = vec2(cos(angle), sin(angle));
  vColour = colour;
}`;

const fragmentShader = `
uniform sampler2D diffuseTexture;

varying vec4 vColour;
varying vec2 vAngle;

void main() {
  vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, -vAngle.y, vAngle.y, vAngle.x) + 0.5;
  gl_FragColor = texture2D(diffuseTexture, coords) * vColour;
}`;

extend({ ShaderMaterial: THREE.ShaderMaterial });
const numParticles = 1000;
const FlameParticle = ({enginePosition}) => {
  const {size} = useThree();
  const ftexture = useTexture(fire);
  console.log(ftexture);
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      diffuseTexture: { value: ftexture },
      pointMultiplier: { 
        value: size.height / (2.0 * Math.tan(0.5 * THREE.MathUtils.degToRad(60))) 
      },
    },
    vertexShader,
    fragmentShader,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
  }), [ftexture, size.height]);

  const particles = useMemo(() => {
    const positions = new Float32Array(numParticles * 3); // [x1, y1, z1, x2, y2, z2, ...]
    const sizes = new Float32Array(numParticles); // [s1, s2, s3, ...]
    const colors = new Float32Array(numParticles * 4); // [r1, g1, b1, a1, r2, g2, b2, a2, ...]
    const angles = new Float32Array(numParticles); // [a1, a2, a3, ...]

    for (let i = 0; i < numParticles; i++) {
      // Position each particle randomly within a small cube area to simulate the base of the flame
      positions[i * 3] = (Math.random() - 0.5) * 2; // x
      positions[i * 3 + 1] = Math.random() * 2; // y, flame goes up so we limit randomness on the y-axis
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2; // z
    
      // Size of each particle, could be random or the same size depending on your flame effect
      sizes[i] = Math.random() + 0.1; // Ensuring that size is never 0
    
      // Colors could be set to represent the colors in a flame, from base to tip
      // Using a gradient from yellow (base) to red (middle) to black (tip)
      const color = new THREE.Color().setHSL(0.1 * Math.random(), 1.0, 0.5); // Random hue between red and yellow
      colors[i * 4] = color.r; // r
      colors[i * 4 + 1] = color.g; // g
      colors[i * 4 + 2] = color.b; // b
      colors[i * 4 + 3] = 1.0 - (Math.random() * 0.5); // a, some randomness for alpha to simulate flickering
    
      // Angle for rotating the texture on each particle, can be random
      angles[i] = Math.random() * Math.PI; // Angle in radians
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
    geometry.setAttribute('angle', new THREE.BufferAttribute(angles, 1));

    return geometry;
  }, []);


  const pointsRef = useRef();

  useFrame(({ clock }) => {
  
    // Check if pointsRef.current and its geometry attributes are defined
    if (
      pointsRef.current &&
      pointsRef.current.geometry &&
      pointsRef.current.geometry.attributes.position &&
      pointsRef.current.geometry.attributes.size &&
      pointsRef.current.geometry.attributes.position.array &&
      pointsRef.current.geometry.attributes.size.array
    ) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      const sizes = pointsRef.current.geometry.attributes.size.array;
  
      // Animate and move particles
      for (let i = 0; i < numParticles; i++) {
        const idx = i * 3;
        const idy = i * 3 + 1;
        const idz = i * 3 + 2;
  
        // Move particles to simulate flames
        positions[idy] -= Math.random() * 0.1; // Y-axis
        positions[idx] -= 0.1 + Math.random() * 0.1; // X-axis - Adjust to emit to one side
        positions[idz] += (Math.random() - 0.5) * 0.1; // Z-axis - Add some randomness
        
        // Reset particle to the start position if it goes beyond a certain point
        if (positions[idy] < -2) {
          positions[idy] = 0;
          positions[idx] = (Math.random() - 0.5) * 2; // Reset X to a new random position
          positions[idz] = (Math.random() - 0.5) * 2; // Reset Z to a new random position
        }
      }
  
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.geometry.attributes.size.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} position={enginePosition} args={[particles, material]}>
      <bufferGeometry attach="geometry" />
      <shaderMaterial attach="material" />
    </points>
  );
};
export default FlameParticle;
export function Helicopter(props) {
  const shuttleRef = useRef();
  const { nodes } = useGLTF(space);

  useEffect(() => {
    // Set the initial rotation of the spacecraft
    if (shuttleRef.current) {
      shuttleRef.current.rotation.set(-1/2, 0, 1.5);
    }
  }, []);

  useFrame((state) => {
    if (shuttleRef.current) {
      // Use sine wave for up and down motion
      const elapsedTime = state.clock.getElapsedTime();
      // Adjust these values as needed for the desired amplitude and frequency
      const amplitude = 0.5; // How high and low the spacecraft moves
      const frequency = 1; // How fast the spacecraft moves
      shuttleRef.current.position.y = amplitude * Math.sin(elapsedTime * frequency);
    }
  });
  const enginePosition = new THREE.Vector3(0, -0.5, -2); 
  return (
    <group ref={shuttleRef} {...props} scale={[0.0005, 0.0005, 0.0005]}>
      {Object.entries(nodes).map(([name, node]) => (
        <mesh
          key={name}
          geometry={node.geometry}
          material={node.material}
          castShadow
          receiveShadow
        />
      ))}
      <FlameParticle enginePosition={enginePosition} />
    </group>
  );
}

useGLTF.preload(space);