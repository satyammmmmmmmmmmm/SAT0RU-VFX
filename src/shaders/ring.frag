uniform float time;

varying vec2 vUv;

void main()
{
    float glow = sin(vUv.x * 30.0 + time * 8.0);

    glow = glow * 0.5 + 0.5;

    vec3 purple = vec3(0.55, 0.0, 1.0);
    vec3 pink = vec3(1.0, 0.2, 0.8);

    vec3 color = mix(purple, pink, glow);

    gl_FragColor = vec4(color, 0.95);
}