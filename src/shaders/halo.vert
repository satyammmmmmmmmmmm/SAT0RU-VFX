varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vPosition;

void main() {

    vec4 worldPos = modelMatrix * vec4(position, 1.0);

    vPosition = position;

    vNormal = normalize(mat3(modelMatrix) * normal);

    vViewDir = normalize(cameraPosition - worldPos.xyz);

    gl_Position =
        projectionMatrix *
        viewMatrix *
        worldPos;

}