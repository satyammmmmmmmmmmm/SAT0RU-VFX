//------------------------------------
// PURE WHITE CORE
//------------------------------------

float radius = length(vUv - 0.5);

// Very small solid white center
float whiteCore =
    1.0 -
    smoothstep(
        0.00,
        0.10,
        radius
    );

// Soft glow around it
float whiteGlow =
    1.0 -
    smoothstep(
        0.10,
        0.22,
        radius
    );

// THIS replaces the color.
// It doesn't add white.
// It literally makes the center white.

color =
    mix(
        color,
        vec3(1.0),
        whiteCore
    );

// Then add a little bloom-friendly glow.

color +=
    vec3(1.0) *
    whiteGlow *
    0.4;