import * as THREE from "three";

export function createWhiteCore() {

    const geometry = new THREE.SphereGeometry(

        0.45,

        64,

        64

    );

    const material = new THREE.MeshBasicMaterial({

        color: 0xffffff

    });

    const core = new THREE.Mesh(

        geometry,

        material

    );
    core.userData.speed = 2.0;

core.userData.minScale = 0.90;

core.userData.maxScale = 1.15;

    return core;

}