"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

interface ParticleData {
  velocity: THREE.Vector3;
  position: THREE.Vector3;
}

export default function ThreeJSBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const particlesDataRef = useRef<ParticleData[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device and adjust particle count accordingly
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient || !mountRef.current) return;

    // Performance-optimized particle count based on device
    const particleCount = isMobile ? 300 : 1000;
    const isHighEndDevice = !isMobile && navigator.hardwareConcurrency && navigator.hardwareConcurrency > 4;
    const finalParticleCount = isHighEndDevice ? 1500 : particleCount;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup with responsive aspect ratio
    const camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      2000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2)); // Limit pixel ratio on mobile
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1';
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Glowing central sphere
    const sphereGeom = new THREE.SphereGeometry(2, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x9966cc),
      transparent: true,
      opacity: 0.7,
      emissive: new THREE.Color(0x9966cc),
      emissiveIntensity: 1.2
    });
    const sphere = new THREE.Mesh(sphereGeom, sphereMat);
    scene.add(sphere);
    sphereRef.current = sphere;

    // Particle Geometry and Material
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    
    const colorPurple = new THREE.Color(0x7e3eff);
    const colorBlue = new THREE.Color(0x5ab9ff);
    const colorMagenta = new THREE.Color(0xff47c7);

    // Initialize particles data
    const particlesData: ParticleData[] = [];

    for (let i = 0; i < finalParticleCount; i++) {
      // Start at center near sphere
      positions.push(0, 0, 0);

      // Random vibrant color variants
      let col;
      const choice = Math.random();
      if (choice < 0.4) col = colorPurple;
      else if (choice < 0.7) col = colorBlue;
      else col = colorMagenta;

      colors.push(col.r, col.g, col.b);

      // Smaller particles on mobile for better performance
      const baseSize = isMobile ? 3 : 5;
      sizes.push(baseSize + Math.random() * (isMobile ? 5 : 10));

      // Particle velocity outward with varying speeds and directions
      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 1.2
        ).multiplyScalar(0.4 + Math.random()),
        position: new THREE.Vector3(0, 0, 0),
      });
    }

    particlesDataRef.current = particlesData;

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      vertexColors: true,
      size: isMobile ? 0.5 : 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    particleSystemRef.current = particleSystem;

    // Soft background glow nebula light
    const nebulaGeometry = new THREE.SphereGeometry(150, 32, 32);
    const nebulaMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x553366),
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });

    const nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    // Animation loop
    const animate = () => {
      if (!sceneRef.current || !rendererRef.current || !cameraRef.current || !particleSystemRef.current) return;

      const positions = particleSystemRef.current.geometry.attributes.position.array as Float32Array;
      const time = clockRef.current.getElapsedTime();

      // Move particles outward from center
      for (let i = 0; i < finalParticleCount; i++) {
        const data = particlesDataRef.current[i];
        if (!data) continue;

        data.position.add(data.velocity);
        
        // Reset particle once it goes too far
        if (data.position.length() > 100) {
          data.position.set(0, 0, 0);
          data.velocity.set(
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 1.2
          ).multiplyScalar(0.4 + Math.random());
        }

        positions[i * 3] = data.position.x;
        positions[i * 3 + 1] = data.position.y;
        positions[i * 3 + 2] = data.position.z;
      }

      particleSystemRef.current.geometry.attributes.position.needsUpdate = true;

      // Subtle swirl for nebula effect on background sphere
      nebula.rotation.y += 0.0005;

      // Subtle forward camera movement (slower on mobile)
      const cameraSpeed = isMobile ? 0.005 : 0.01;
      cameraRef.current.position.z -= cameraSpeed;
      if (cameraRef.current.position.z < 48) cameraRef.current.position.z = 50;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      if (sceneRef.current) {
        sceneRef.current.clear();
      }
    };
  }, [isClient, isMobile]);

  // Show loading state while Three.js initializes
  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: "url('/space-nebula-bg.jpg?v=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Fallback background image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: "url('/space-nebula-bg.jpg?v=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Three.js container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/5" />
    </div>
  );
}

