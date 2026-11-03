import * as THREE from "three";
import { createWhiteCore } from "./whitecore";
import { createHalo } from "./halo";

import { createCore } from "./core";
import { createShell } from "./shell";
import { createRing } from "./ring";

export function createOrb() {

    const group = new THREE.Group();

 const core = createCore();

const whiteCore = createWhiteCore();

const shell = createShell();

const ring = createRing();   // Create ring FIRST
const halo = createHalo();

group.userData.whiteCore = whiteCore;

group.userData.ring = ring;  // Now it's safe

group.add(core);

group.add(whiteCore);

group.add(shell);

group.add(halo);

group.add(ring);
group.userData.halo = halo;
    group.userData.shader = core.userData.shader;

    return group;

}