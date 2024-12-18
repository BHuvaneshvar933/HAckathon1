import React, { useEffect } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  useEffect(() => {
    let camera, scene, renderer, particles, material;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000);
      camera.position.z = 500;
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x5d3fd3, 0.001);
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const size = 2000;
      for (let i = 0; i < 7000; i++) {
        const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
        vertices.push(x, y, z);
      }
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
      material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
      });
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = "fixed"; 
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "-1"; 
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%"; 

      document.body.appendChild(renderer.domElement);
      document.body.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onWindowResize);
    }
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function onPointerMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }
    function animate() {
      requestAnimationFrame(animate);
      render();
    }
    function render() {
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      scene.rotation.x += 0.001;
      scene.rotation.y += 0.002;
    }
    return () => {
      if (renderer && renderer.domElement) {
        renderer.dispose();
        document.body.removeChild(renderer.domElement);
      }
    };
  }, []);
  return null;
};

export default ParticleBackground;
