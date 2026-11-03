export function isPinching(hand) {

    const thumb = hand[4];
    const index = hand[8];

    const dx = thumb.x - index.x;
    const dy = thumb.y - index.y;
    const dz = thumb.z - index.z;

    const distance = Math.sqrt(
        dx * dx +
        dy * dy +
        dz * dz
    );

    return distance < 0.05;
}