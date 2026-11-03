import './style.css';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { updateHalo } from "./orb/updateHalo";
import { createOrb } from "./orb/orb";
import { createParticles } from "./particles/particles";
import { animateParticles } from "./particles/animation";
import { updateWhiteCore }
from "./orb/updateWhiteCore";
import { updateRing }
from "./orb/updateRing";
import { createLightning } from "./lightning/lightning";
import { updateLightning } from "./lightning/updateLightning";
import { isPinching } from "./hand/gestures";
import { VFXState } from "./state/state";
import {

    initHandTracker,

    detectHands

} from "./hand/handTracker";

const video = document.createElement("video");

video.autoplay = true;
video.playsInline = true;
video.muted = true;

const stream = await navigator.mediaDevices.getUserMedia({
    video: true
});

video.srcObject = stream;

await video.play();

await initHandTracker();

// Create Scene
const scene = new THREE.Scene();
await initHandTracker();
// Create Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Create Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

// Move Camera Back
camera.position.z = 5;


// Create Mesh
const orb = createOrb();
const lightning = createLightning();

scene.add(lightning);
const whiteCore =
    orb.userData.whiteCore;
    const ring =
    orb.userData.ring;
    const halo = orb.userData.halo;

scene.add(orb);
console.log(orb.children);
console.log("orb:", orb);
console.log("orb userData:", orb.userData);
console.log("Children:", orb.children);


const shaderMaterial = orb.userData.shader;

const particles = createParticles();

scene.add(particles);




// Ambient Light
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1
);

scene.add(ambientLight);

// Render Pass
const renderPass = new RenderPass(scene, camera);

// Bloom Pass
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    4.2,
    0.45,
    0.65
);

// Effect Composer
const composer = new EffectComposer(renderer);

composer.addPass(renderPass);
composer.addPass(bloomPass);




// Animation Loop
function animate() {

    requestAnimationFrame(animate);
    const elapsed =
    clock.getElapsedTime();

updateWhiteCore(

    whiteCore,

    elapsed,

    VFXState.charge

);

updateRing(

    ring,

    elapsed

);
updateLightning(lightning, elapsed);
    shaderMaterial.uniforms.time.value += 0.03;

    orb.rotation.y += 0.005;

    animateParticles(particles);

    const results = detectHands(video);

if (
    results &&
    results.landmarks &&
    results.landmarks.length > 0
) {
    const tip = results.landmarks[0][8];

    const hand = results.landmarks[0];

VFXState.charging = isPinching(hand);

console.log("Charging:", VFXState.charging);

const targetX = (tip.x - 0.5) * 8;
const targetY = -(tip.y - 0.5) * 5;

// Smooth movement
orb.position.x += (targetX - orb.position.x) * 0.15;
orb.position.y += (targetY - orb.position.y) * 0.15;

lightning.position.copy(orb.position);
particles.position.copy(orb.position);
}

if (VFXState.charging) {

    VFXState.charge += 0.015;

} else {

    VFXState.charge -= 0.03;

}

VFXState.charge = THREE.MathUtils.clamp(
    VFXState.charge,
    0,
    1
);

updateHalo(
    halo,
    elapsed,
    VFXState.charge
);
console.log(VFXState.charge.toFixed(2));
    composer.render();



}
const clock = new THREE.Clock();
animate();

