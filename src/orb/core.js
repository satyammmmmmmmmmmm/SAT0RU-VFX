import * as THREE from "three";

import vertexShader from "../shaders/orb.vert";
import fragmentShader from "../shaders/orb.frag";

export function createCore() {

    const geometry = new THREE.SphereGeometry(
        1,
        64,
        64
    );

    const material = new THREE.ShaderMaterial({

        uniforms: {

            time: { value: 0 }

        },

        vertexShader,
        fragmentShader

    });

    const core = new THREE.Mesh(
        geometry,
        material
    );

    core.userData.shader = material;

    return core;

}