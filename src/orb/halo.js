import * as THREE from "three";

import haloVertex from "../shaders/halo.vert";
import haloFragment from "../shaders/halo.frag";

export function createHalo() {

    const geometry = new THREE.SphereGeometry(

        1.18,

        64,

        64

    );

    const material = new THREE.ShaderMaterial({

        vertexShader: haloVertex,

        fragmentShader: haloFragment,

        transparent: true,

        blending: THREE.AdditiveBlending,

        side: THREE.BackSide,

        depthWrite: false,

        uniforms: {

            time: { value: 0 },

            charge: { value: 0 }

        }

    });

    const halo = new THREE.Mesh(

        geometry,

        material

    );

    return halo;

}