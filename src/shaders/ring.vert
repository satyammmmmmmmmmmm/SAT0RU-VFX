uniform float time;

varying vec2 vUv;

void main()
{
    vUv = uv;

    vec3 pos = position;

    float wave =
        sin(uv.x * 20.0 + time * 5.0) * 0.04;

    wave +=
        sin(uv.x * 35.0 - time * 7.0) * 0.02;

    pos += normal * wave;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);
}