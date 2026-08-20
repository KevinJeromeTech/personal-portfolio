import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;

function buildPositions() {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3]     = (Math.random() - 0.5) * 90;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 90;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }
  return arr;
}

function buildSizes() {
  const arr = new Float32Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) arr[i] = Math.random() * 0.8 + 0.2;
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
  const positions = POSITIONS;
  const sizes = SIZES;

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.018;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.009;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.18}
        color="#8fafc0"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

const SHAPES_CONFIG = [
  { pos: [-16,  6, -12], scale: 3.2,  speed: 0.35, offset: 0.0  },
  { pos: [ 18, -9, -18], scale: 2.4,  speed: 0.28, offset: 1.2  },
  { pos: [  6, 13, -22], scale: 4.0,  speed: 0.18, offset: 2.4  },
  { pos: [-22,-13,  -6], scale: 1.8,  speed: 0.50, offset: 0.8  },
  { pos: [ 14,  7, -10], scale: 1.4,  speed: 0.60, offset: 3.1  },
  { pos: [ -4,-16, -14], scale: 2.0,  speed: 0.22, offset: 1.8  },
];

function FloatingShape({ pos, scale, speed, offset }) {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * speed * 0.38 + offset;
    mesh.current.rotation.y = t * speed * 0.62 + offset;
    mesh.current.position.y = pos[1] + Math.sin(t * speed * 0.28 + offset) * 1.8;
  });

  return (
    <mesh ref={mesh} position={pos} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#8fafc0"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

// Slowly drifting ring
function FloatingRing() {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.12;
    mesh.current.rotation.z = t * 0.07;
    mesh.current.position.y = Math.sin(t * 0.2) * 3;
    mesh.current.position.x = Math.cos(t * 0.15) * 2;
  });

  return (
    <mesh ref={mesh} position={[8, 0, -8]}>
      <torusGeometry args={[4, 0.05, 8, 60]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
    </mesh>
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
      <FloatingRing />
      {SHAPES_CONFIG.map((cfg, i) => (
        <FloatingShape key={i} {...cfg} />
      ))}
    </Canvas>
  );
}
