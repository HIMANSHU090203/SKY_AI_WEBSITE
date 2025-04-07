// Black Hole Visualization
// This creates a physics-inspired black hole visualization

// Scene variables
let scene, camera, renderer;
let blackHole, accretionDisk, starField;
let blackHoleUniforms, starUniforms;
let clock;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

// Initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20; // Optimal distance to see the black hole
    camera.position.y = 0; // Centered vertically
    camera.position.x = 0; // Centered horizontally
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Look at center where black hole will be
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1); // Set clear background to black
    document.getElementById('container').appendChild(renderer.domElement);
    
    // Initialize clock for time-based animations
    clock = new THREE.Clock();
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x202020);
    scene.add(ambientLight);
    
    // Create black hole and starfield
    createBlackHoleSystem();
    createEnhancedStarfield();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Add mouse movement tracking for interactive effect
    document.addEventListener('mousemove', onMouseMove);
    
    // Start animation
    animate();
}

// Create the black hole system with improved effects
function createBlackHoleSystem() {
    // Create a quad for the black hole effect - centered in the viewport
    const size = Math.max(window.innerWidth, window.innerHeight) * 1.5;
    const geometry = new THREE.PlaneGeometry(size, size);
    
    // Set up uniforms for the shader
    blackHoleUniforms = {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        backgroundTexture: { value: null }
    };
    
    // Create material using the advanced shader
    const material = new THREE.ShaderMaterial({
        uniforms: blackHoleUniforms,
        vertexShader: Shaders.gravitationalLensVertex,
        fragmentShader: Shaders.gravitationalLensFragment,
        transparent: true,
        depthWrite: false, // Ensure it renders properly
        depthTest: false   // Ensure it's always visible
    });
    
    // Create the mesh and add to scene
    blackHole = new THREE.Mesh(geometry, material);
    blackHole.position.x = 0; // Center horizontally
    blackHole.position.y = 0; // Center vertically
    blackHole.position.z = -5; // Position slightly behind but still visible
    scene.add(blackHole);
}

// Create an enhanced starfield with custom shaders
function createEnhancedStarfield() {
    const starCount = 3000; // More stars
    const geometry = new THREE.BufferGeometry();
    
    // Create arrays for star positions, sizes, and brightness
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const brightness = new Float32Array(starCount);
    
    // Populate star data
    for (let i = 0; i < starCount; i++) {
        // Calculate position (spherical distribution)
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 150 + Math.random() * 200; // Slightly closer stars
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        
        // Random size and brightness - slightly larger
        sizes[i] = 0.8 + Math.random() * 3.0;
        brightness[i] = 0.3 + Math.random() * 0.7;
    }
    
    // Add attributes to geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('brightness', new THREE.BufferAttribute(brightness, 1));
    
    // Set up uniforms for the shader
    starUniforms = {
        time: { value: 0.0 }
    };
    
    // Create material using the advanced shader
    const material = new THREE.ShaderMaterial({
        uniforms: starUniforms,
        vertexShader: Shaders.starfieldVertex,
        fragmentShader: Shaders.starfieldFragment,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });
    
    // Create points and add to scene
    starField = new THREE.Points(geometry, material);
    scene.add(starField);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update uniform resolution
    if (blackHoleUniforms && blackHoleUniforms.resolution) {
        blackHoleUniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    }
    
    // Resize the black hole plane
    if (blackHole) {
        blackHole.geometry.dispose();
        const size = Math.max(window.innerWidth, window.innerHeight) * 1.5;
        blackHole.geometry = new THREE.PlaneGeometry(size, size);
    }
}

// Track mouse movement for interactive effect
function onMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Get elapsed time
    const elapsedTime = clock.getElapsedTime();
    
    // Update shader uniforms with time
    if (blackHoleUniforms && blackHoleUniforms.time) {
        blackHoleUniforms.time.value = elapsedTime;
    }
    
    if (starUniforms && starUniforms.time) {
        starUniforms.time.value = elapsedTime;
    }
    
    // Smooth camera movement based on mouse position - subtler effect
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    
    // Gentle camera movement that keeps black hole centered
    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (-targetY - camera.position.y) * 0.03;
    camera.lookAt(new THREE.Vector3(0, 0, 0)); // Always look at black hole
    
    // Add subtle rotation to the black hole
    if (blackHole) {
        blackHole.rotation.z += 0.0005; // Very slow constant rotation
        // Add subtle scale pulsing
        const scaleFactor = 1.0 + 0.01 * Math.sin(elapsedTime * 0.3);
        blackHole.scale.set(scaleFactor, scaleFactor, 1);
    }
    
    // Rotate starfield slowly
    if (starField) {
        starField.rotation.y += 0.0003;
        starField.rotation.z += 0.0001;
    }
    
    // Render scene
    renderer.render(scene, camera);
}

// Initialize on load
window.addEventListener('load', () => {
    // Load shaders first, then initialize
    if (typeof Shaders === 'undefined') {
        // Create script element for shaders
        const shaderScript = document.createElement('script');
        shaderScript.src = 'js/shaders.js';
        shaderScript.onload = init;
        document.head.appendChild(shaderScript);
    } else {
        init();
    }
}); 