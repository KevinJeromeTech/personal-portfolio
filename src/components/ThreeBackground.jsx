import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 280;

function buildPositions() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3]     = (Math.random() - 0.5) * 120;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 120;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 60;
  }
  return arr;
}

function buildSizes() {
  const arr = new Float32Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) arr[i] = Math.random() * 0.6 + 0.15;
  return arr;
}

const POSITIONS = buildPositions();
const SIZES = buildSizes();

function CameraParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const lerped = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const handle = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useFrame(() => {
    lerped.current.x += (mouse.current.x - lerped.current.x) * 0.04;
    lerped.current.y += (mouse.current.y - lerped.current.y) * 0.04;
    camera.position.x = lerped.current.x * 2.5;
    camera.position.y = lerped.current.y * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Particles() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.018;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.009;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[POSITIONS, 3]} />
        <bufferAttribute attach="attributes-size" args={[SIZES, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#c0392b"
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeBackground() {
  if (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  return (
    <Canvas
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 32], fov: 72 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      dpr={[1, 1.5]}
    >
      <CameraParallax />
      <Particles />
    </Canvas>
  );
}
