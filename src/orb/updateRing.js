export function updateRing(ring, time) {

    ring.rotation.z += 0.015;

    ring.rotation.x =
        Math.PI / 2 +
        Math.sin(time * 1.5) * 0.15;

    const s =
        1.0 +
        Math.sin(time * 2.0) * 0.03;

    ring.scale.set(s, s, s);

    if (ring.userData.shader) {
        ring.userData.shader.uniforms.time.value = time;
    }

}