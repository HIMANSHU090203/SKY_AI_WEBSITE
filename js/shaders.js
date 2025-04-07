// Collection of GLSL shaders for the black hole visualization

const Shaders = {
    // Vertex shader for the gravitational lens effect
    gravitationalLensVertex: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
            vUv = uv;
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    
    // Fragment shader for the gravitational lens effect
    gravitationalLensFragment: `
        uniform float time;
        uniform vec2 resolution;
        uniform sampler2D backgroundTexture;
        
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        // Constants for black hole effect - MUCH larger and stronger
        const float BLACK_HOLE_RADIUS = 0.4;
        const float DISTORTION_FACTOR = 15.0;
        const float GLOW_STRENGTH = 10.0;
        
        // Noise function
        float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        
        // Fractal Brownian Motion
        float fbm(vec2 p) {
            float sum = 0.0;
            float amp = 1.0;
            float freq = 1.0;
            
            for (int i = 0; i < 6; i++) {
                sum += amp * noise(p * freq);
                amp *= 0.5;
                freq *= 2.0;
                p = p + vec2(0.5, 0.7) * time * 0.01;
            }
            
            return sum;
        }
        
        void main() {
            // Calculate distance from center
            vec2 center = vec2(0.5);
            vec2 pos = vUv - center;
            float dist = length(pos);
            
            // Direction from center
            vec2 dir = normalize(pos);
            
            // Black hole effect - gravitational lensing
            float distortionStrength = DISTORTION_FACTOR / max(dist * 8.0 - BLACK_HOLE_RADIUS * 2.0, 0.1);
            
            // Create the distortion
            vec2 distortedUv = vUv;
            
            // Apply gravitational lensing effect
            if (dist > BLACK_HOLE_RADIUS) {
                // Points outside black hole get bent around it
                distortedUv = vUv - dir * distortionStrength * 0.01;
            }
            
            // Create accretion disk glow
            vec3 diskColor = vec3(0.0);
            
            // Only render disk within a specific ring - increased range
            if (dist > BLACK_HOLE_RADIUS * 1.0 && dist < BLACK_HOLE_RADIUS * 10.0) {
                // Create turbulent disk
                float turb = fbm(vUv * 5.0 + time * 0.05) * 1.0;
                
                // Hot inner part (blue-white) - extremely bright colors
                vec3 innerColor = vec3(0.8, 1.0, 1.8) * 5.0;
                
                // Warm outer part (orange-red) - much more intense
                vec3 outerColor = vec3(2.5, 0.8, 0.2);
                
                // Mix colors based on distance
                float diskMix = smoothstep(BLACK_HOLE_RADIUS * 1.0, BLACK_HOLE_RADIUS * 5.0, dist);
                diskColor = mix(innerColor, outerColor, diskMix);
                
                // Add turbulence
                diskColor *= (1.0 + turb);
                
                // Add time-based pulsing - stronger effect
                diskColor *= 1.0 + 0.3 * sin(time * 0.8 + dist * 20.0);
                
                // Disk opacity - stronger near the black hole boundary
                float diskOpacity = (1.0 - smoothstep(BLACK_HOLE_RADIUS * 1.0, BLACK_HOLE_RADIUS * 10.0, dist)) * 1.5;
                diskOpacity *= (0.7 + 0.3 * sin(dist * 50.0 - time * 3.0));
                
                // Add glow around the black hole - stronger glow
                float glow = GLOW_STRENGTH / (dist * 8.0);
                diskColor += vec3(0.3, 0.2, 1.0) * glow;
                
                diskColor *= diskOpacity;
            }
            
            // Black hole is completely black with strong boundary
            vec4 finalColor;
            if (dist < BLACK_HOLE_RADIUS) {
                // Pure black with full opacity
                finalColor = vec4(0.0, 0.0, 0.0, 1.0);
                
                // Add a stronger blue edge glow at the boundary
                float edgeGlow = smoothstep(BLACK_HOLE_RADIUS - 0.05, BLACK_HOLE_RADIUS, dist);
                finalColor.rgb += vec3(0.2, 0.4, 1.0) * edgeGlow * 1.5;
            } else {
                // Composite disk color with much higher intensity
                finalColor = vec4(diskColor * 3.0, 1.0);
                
                // Add some stars in the background (fewer to not compete with disk)
                float stars = pow(noise(vUv * 500.0), 18.0) * 2.0;
                finalColor.rgb += vec3(stars);
            }
            
            gl_FragColor = finalColor;
        }
    `,
    
    // Vertex shader for the starfield background
    starfieldVertex: `
        attribute float size;
        attribute float brightness;
        varying float vBrightness;
        
        void main() {
            vBrightness = brightness;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    
    // Fragment shader for the starfield background
    starfieldFragment: `
        uniform float time;
        varying float vBrightness;
        
        void main() {
            // Calculate distance from center of point
            vec2 center = gl_PointCoord - vec2(0.5);
            float dist = length(center);
            
            // Create soft circle for each star
            float strength = 1.0 - smoothstep(0.0, 0.5, dist);
            
            // Add twinkling effect
            float twinkle = 0.8 + 0.2 * sin(time * vBrightness);
            
            // Create star color (slightly blue tinted)
            vec3 color = mix(vec3(1.0), vec3(0.8, 0.9, 1.0), vBrightness);
            
            // Final color with alpha for soft stars
            gl_FragColor = vec4(color * strength * twinkle * vBrightness, strength);
        }
    `
};

// Export the shaders object
if (typeof module !== 'undefined') {
    module.exports = Shaders;
} 