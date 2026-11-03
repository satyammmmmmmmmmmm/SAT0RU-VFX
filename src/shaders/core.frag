uniform float charge;

varying vec3 vNormal;

void main() {

    vec3 purple = vec3(
        0.85,
        0.15,
        1.0
    );

    vec3 white = vec3(1.0);

    vec3 color =
        mix(
            purple,
            white,
            charge * 0.3
        );

    gl_FragColor =
        vec4(
            color,
            1.0
        );

}