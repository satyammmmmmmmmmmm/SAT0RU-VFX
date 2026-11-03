uniform float time;
uniform float charge;

varying vec3 vNormal;

void main() {

    vNormal = normal;

    vec3 pos = position;

    float wave1 =
        sin(position.x * 8.0 + time * 4.0);

    float wave2 =
        sin(position.y * 9.0 + time * 3.5);

    float wave3 =
        sin(position.z * 10.0 + time * 5.0);

    float boil =
        (wave1 + wave2 + wave3) * 0.02;

    boil *= (1.0 + charge * 2.0);

    pos += normal * boil;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);

}