import * as THREE from "three";

export function createShell() {

    const geometry = new THREE.SphereGeometry(
        1.18,
        64,
        64
    );

    const material = new THREE.MeshStandardMaterial({

        color: 0xaa00ff,

        emissive: 0xaa00ff,

        emissiveIntensity: 2,

        transparent: true,

        opacity: 0.35,

        metalness: 0,

        roughness: 0.2

    });

    return new THREE.Mesh(
        geometry,
        material
    );

}