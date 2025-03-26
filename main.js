import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear materiales con diferentes colores
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Azul (centro)
const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Verde (izquierda)
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Rojo (derecha)

// Crear cubos
const cubeBlue = new THREE.Mesh(geometry, materialBlue);
const cubeGreen = new THREE.Mesh(geometry, materialGreen);
const cubeRed = new THREE.Mesh(geometry, materialRed);

// Posicionar cubos
cubeBlue.position.x = 0;   // Centro
cubeGreen.position.x = -2; // A la izquierda del azul
cubeRed.position.x = 2;    // A la derecha del azul

// Agregar cubos a la escena
scene.add(cubeBlue);
scene.add(cubeGreen);
scene.add(cubeRed);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación
function animate() {
    cubeGreen.rotation.x += 0.01;
    cubeGreen.rotation.y += 0.01;

    cubeBlue.rotation.x += 0.02; // Más rápido
    cubeBlue.rotation.y += 0.02;

    cubeRed.rotation.x += 0.03; // Aún más rápido
    cubeRed.rotation.y += 0.03;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);
