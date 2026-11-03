export function updateHalo(halo, time, charge) {

    halo.material.uniforms.time.value = time;
    halo.material.uniforms.charge.value = charge;

    const pulse =
        Math.sin(time * 5.0) * 0.03;

    const scale =
        1.2 +
        pulse +
        charge * 0.5;

    halo.scale.set(
        scale,
        scale,
        scale
    );

}