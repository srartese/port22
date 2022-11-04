import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import './BubbleCanvas.css';

const PARTICLES = {
  // Lifecycle
  SPAWN_EVERY_X_FRAMES: 3, // How frequently a particle spawns. 1 is the most frequently a particle can be spawned.
  LIFESPAN: 100, // How many frames particles last before disappearing.

  // Movement
  SPEED: .2, // How fast particles move across the screen. 0 = no movement.
  WIGGLINESS: .1, // How much paricles wiggle while they move. 0 = no wigglng.
  
  // Size
  STARTING_RADIUS: 5, // How big particles are when they spawn.
  STARTING_RADIUS_VARIABILITY: 50, // Variation in the sizes of particles when they spawn. 0 = all particles will be the same size. 
  EXPAND_BY: 10, //  How much a particle will expand after it has spawned. Negative values mean it will get smaller it ages.
}

function sketch(p5) {
  let particles = []
  let lastTrailSpawnFrame = 0
  let selectedColor = "white"
  
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
  };

  p5.updateWithProps = props => {
    if (props.selectedColor) {
      selectedColor = props.selectedColor
    }
  };

  p5.draw = () => {
    /**
     * Update
     */
    
    // Move particles
    particles.forEach(particle => {
      // randomly change angle of particle so we get a wiggling effect
      particle.angle += p5.random(-PARTICLES.WIGGLINESS, PARTICLES.WIGGLINESS)

      // move particle in the direction of the angle
      particle.pos.add(
        p5.cos(particle.a) * PARTICLES.SPEED,
        p5.sin(particle.a) * PARTICLES.SPEED
      )
    })

    // Remove old particles
    particles = particles.filter(({ createdAtFrame }) => (p5.frameCount - createdAtFrame) < PARTICLES.LIFESPAN)

    /**
     * Draw
     */
    p5.background(253);
    //p5.ellipse(56, 46, 55, 55);

    // draw particles
    p5.noFill()
    particles.forEach(({ color, pos, createdAtFrame, startingRadius }) => {
      const particleAge = p5.frameCount - createdAtFrame
      // set opacity based on age of particle
      const colorAlpha = p5.map(particleAge, 0, PARTICLES.LIFESPAN, 255, 0)
      color.setAlpha(colorAlpha)

      const particleRadius = p5.map(particleAge, 0, PARTICLES.LIFESPAN, startingRadius, startingRadius + PARTICLES.EXPAND_BY)

      p5.stroke(color)
      p5.strokeWeight(particleRadius)
      p5.point(pos.x, pos.y)
    })
  };

  p5.mouseMoved = () => {
    if (p5.frameCount - lastTrailSpawnFrame >= PARTICLES.SPAWN_EVERY_X_FRAMES){
      lastTrailSpawnFrame = p5.frameCount
      spawnParticle(p5.mouseX, p5.mouseY, selectedColor)
    }
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  function spawnParticle(x, y, colorString) {
    particles.push({ 
      pos: p5.createVector(x, y),
      a: p5.random(p5.TWO_PI),
      createdAtFrame: p5.frameCount,
      color: p5.color(colorString),
      startingRadius: p5.random(PARTICLES.STARTING_RADIUS, PARTICLES.STARTING_RADIUS + PARTICLES.STARTING_RADIUS_VARIABILITY)
    })
  }
}

function BubbleCanvas({ selectedColor }) {
  return (
    <div id="canvas-container">
      <ReactP5Wrapper sketch={sketch} selectedColor={selectedColor} />
    </div>
  );
}

export default BubbleCanvas;