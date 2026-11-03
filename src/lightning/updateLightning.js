import * as THREE from "three";

export function updateLightning(group, time) {

    group.children.forEach((bolt, index) => {

        const points = [];

        const start = new THREE.Vector3(0, 0, 0);

        const angle =
            (index / group.children.length) * Math.PI * 2 +
            time * 0.3;

        const end = new THREE.Vector3(

            Math.cos(angle) * 1.15,
            Math.sin(angle) * 1.15,
            0

        );

        points.push(start);

        const segments = 10;

        for (let i = 1; i < segments; i++) {

            const t = i / segments;

            const point = new THREE.Vector3().lerpVectors(
                start,
                end,
                t
            );

            point.x += (Math.random() - 0.5) * 0.12;
            point.y += (Math.random() - 0.5) * 0.12;
            point.z += (Math.random() - 0.5) * 0.05;

            points.push(point);

        }

        points.push(end);

        bolt.geometry.setFromPoints(points);

    });

}