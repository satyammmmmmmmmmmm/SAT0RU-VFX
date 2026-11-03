import * as THREE from 'three';

export function createParticles() {

    const geometry = new THREE.BufferGeometry();

    const count = 300;

    const positions = new Float32Array(count * 3);

    const speeds = [];
    const radii = [];
    const angles = [];

    for (let i = 0; i < count; i++) {

        const radius = 1.8 + Math.random() * 0.8;
        const angle = Math.random() * Math.PI * 2;

        speeds.push(0.002 + Math.random() * 0.008);
        radii.push(radius);
        angles.push(angle);

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
        positions[i * 3 + 2] = Math.sin(angle) * radius;

    }

    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({

        color: 0xaa00ff,
        size: 0.03,

        transparent: true,
        opacity: 0.8

    });

    const particles = new THREE.Points(
        geometry,
        material
    );
    particles.userData = {
    positions,
    speeds,
    radii,
    angles
};

    return particles;

}