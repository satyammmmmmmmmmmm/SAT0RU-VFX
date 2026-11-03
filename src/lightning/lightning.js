import * as THREE from "three";

export function createLightning() {

    const group = new THREE.Group();

    for (let i = 0; i < 8; i++) {

        const geometry = new THREE.BufferGeometry();

        const material = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        const bolt = new THREE.Line(geometry, material);

        group.add(bolt);

    }

    return group;

}