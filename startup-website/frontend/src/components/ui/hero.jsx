'use client'; // Ensure client-side rendering

import React from 'react';
import dynamic from 'next/dynamic';
import { Sketch } from 'react-p5-wrapper';

const GalaxyAnimation = ({ numParticles = 300, baseColor = [200, 100] }) => {
  const sketch = (p5) => {
    let particles = [];

    class Particle {
      constructor() {
        this.angle = p5.random(p5.TWO_PI);
        this.radius = p5.random(10, 150);
        this.speed = p5.random(0.01, 0.05);
        this.size = p5.random(1, 4);
        this.brightness = p5.random(100, 255);
      }

      update() {
        this.angle += this.speed;
        this.x = p5.width / 2 + p5.cos(this.angle) * this.radius;
        this.y = p5.height / 2 + p5.sin(this.angle) * this.radius;
        this.radius += p5.random(-0.5, 0.5);
        this.radius = p5.constrain(this.radius, 10, 150);
      }

      display() {
        p5.noStroke();
        p5.fill(...baseColor, this.brightness, 200);
        p5.ellipse(this.x, this.y, this.size, this.size);
      }
    }

    p5.setup = () => {
      if (typeof window === 'undefined') return; // Prevent server-side execution
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    p5.draw = () => {
      if (typeof window === 'undefined') return;
      p5.background(10, 10, 10, 50);
      for (let particle of particles) {
        particle.update();
        particle.display();
      }
    };

    p5.windowResized = () => {
      if (typeof window === 'undefined') return;
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Sketch sketch={sketch} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(GalaxyAnimation), { ssr: false });