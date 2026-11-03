uniform float time;

varying vec2 vUv;
varying float vWave;
varying vec3 vNormal;

float random(vec2 st)
{
    return fract(
        sin(dot(st, vec2(12.9898,78.233)))
        * 43758.5453
    );
}

float noise(vec2 st)
{
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0,0.0));
    float c = random(i + vec2(0.0,1.0));
    float d = random(i + vec2(1.0,1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a,b,u.x)
         + (c-a) * u.y * (1.0-u.x)
         + (d-b) * u.x * u.y;
}
float fbm(vec2 st)
{
    float value = 0.0;
    float amplitude = 0.5;

    for(int i = 0; i < 5; i++)
    {
        value += amplitude * noise(st);

        st *= 2.0;

        amplitude *= 0.5;
    }

    return value;
}

void main() {

    vUv = uv;

    vec2 uv = position.xy * 3.0;

float wave1 =
    fbm(
        uv * 3.0 +
        vec2(time * 0.35, time * 0.18)
    );

float wave2 =
    fbm(
        uv * 7.0 -
        vec2(time * 0.60, time * 0.45)
    );

float wave3 =
    sin(position.x * 12.0 + time * 5.0) *
    sin(position.y * 10.0 + time * 4.0) *
    0.5;

float wave =
    wave1 * 0.05 +
    wave2 * 0.025 +
    wave3 * 0.02;
    vWave = wave;

    float pulse =
    1.0 +
    sin(time * 8.0) * 0.03;

vec3 newPosition =
    position +
    normal * wave * pulse;

        vNormal = normal;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(newPosition,1.0);

}