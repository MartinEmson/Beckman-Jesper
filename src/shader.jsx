import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function shader() {
  useEffect(() => {
    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a camera and a scene
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const scene = new THREE.Scene();

    // Create a plane geometry for the background
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Create a raw shader material with a noise shader
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        void main() {
          // Simple noise effect
          float noise = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          gl_FragColor = vec4(vec3(noise), 1.0);
        }
      `,
      uniforms: {
        time: { value: 1.0 }
      }
    });

    // Create a mesh with the geometry and material, and add it to the scene
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create an orbit controls to control the camera
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Update the time uniform in the material
      material.uniforms.time.value = performance.now() / 1000;

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return <div />;
}

export default shader;