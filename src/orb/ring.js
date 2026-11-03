import * as THREE from "three";

import ringVertex from "../shaders/ring.vert";
import ringFragment from "../shaders/ring.frag";

export function createRing() {

    const geometry = new THREE.TorusGeometry(

        1.45,

        0.03,

        32,

        128

    );

    const material = new THREE.ShaderMaterial({

        uniforms: {

            time: { value: 0 }

        },

        vertexShader: ringVertex,

        fragmentShader: ringFragment,

        transparent: true,

        side: THREE.DoubleSide

    });

    const ring = new THREE.Mesh(

        geometry,

        material

    );

    ring.rotation.x = Math.PI / 2;

    ring.userData.speed = 1.5;

    ring.userData.shader = material;

    return ring;

}