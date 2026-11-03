export function animateParticles(particles) {

    const data = particles.userData;

    const array =
        particles.geometry.attributes.position.array;

    for (let i = 0; i < data.angles.length; i++) {

        data.angles[i] += data.speeds[i];

        array[i * 3] =
            Math.cos(data.angles[i]) *
            data.radii[i];

        array[i * 3 + 2] =
            Math.sin(data.angles[i]) *
            data.radii[i];

    }

    particles.geometry.attributes.position.needsUpdate = true;

}