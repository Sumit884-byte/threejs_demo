
export const modelConfig = {
    // Rotation speed (OrbitControls autoRotateSpeed)
    rotationSpeed: 0.8,

    // Position on screen
    position: {
        x: 1.5,  // Positive is right, negative is left
        y: -0.5, // Positive is up, negative is down
        z: 0.0
    },

    // Initial rotation (in radians)
    initialRotationY: Math.PI * 0.1,

    // Camera settings
    camera: {
        position: { x: 5, y: 3, z: 8 },
        fov: 50
    },

    // Model scaling
    scale: 10
}
