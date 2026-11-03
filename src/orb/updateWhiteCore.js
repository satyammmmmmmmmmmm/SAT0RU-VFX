export function updateWhiteCore(whiteCore, time, charge) {

    const pulse =
        Math.sin(time * 6) * 0.04;

    const scale =
        1 +
        pulse +
        charge * 0.8;

    whiteCore.scale.set(
        scale,
        scale,
        scale
    );

    if (whiteCore.material) {

        whiteCore.material.emissiveIntensity =
            2 + charge * 6;

    }

}