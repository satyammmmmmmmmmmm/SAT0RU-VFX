varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vPosition;

uniform float time;
uniform float charge;

void main() {

    float fresnel = pow(
        1.0 - max(dot(vNormal, vViewDir), 0.0),
        4.0
    );

    float wave =
        sin(vPosition.y * 12.0 + time * 4.0) *
        sin(vPosition.x * 12.0 + time * 3.0);

    wave = wave * 0.5 + 0.5;

    vec3 purple = vec3(0.45, 0.05, 1.0);
    vec3 pink = vec3(1.0, 0.2, 0.9);

    vec3 color = mix(
        purple,
        pink,
        wave
    );

    color *= fresnel;

    color *= 1.0 + charge * 2.0;

    gl_FragColor = vec4(
        color,
        fresnel * wave * 0.8
    );

}