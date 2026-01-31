---
description: 6-Month Three.js Mastery Roadmap
---

# 🎯 Three.js Mastery - 6 Month Journey

This workflow tracks your progression from beginner to advanced Three.js developer.

---

## ✅ Month 1: Basic Scene with Rotating GLB Model
**Status: COMPLETED**

### What You've Built:
- ✅ Next.js project setup with Three.js
- ✅ GLTFLoader with Draco compression support
- ✅ OrbitControls for camera manipulation
- ✅ Basic lighting (ambient + directional + spotlight)
- ✅ Auto-rotation and camera controls
- ✅ Premium Ferrari landing page integration

### Files:
- `app/components/ThreeScene.tsx` - Main 3D scene
- `app/page.tsx` - Landing page with 3D integration
- `public/ferrari.glb` - 3D model with Draco compression
- `public/draco/` - Decoder files

---

## 🚀 Month 2: Realistic Lighting and Shadows
**Status: IN PROGRESS**

### Goals:
- [ ] Add HDRI environment maps for realistic reflections
- [ ] Implement proper shadow mapping
- [ ] Add contact shadows for realism
- [ ] Experiment with tone mapping
- [ ] Add environment-based lighting

### Key Concepts:
- **HDRIs**: High Dynamic Range Images provide 360° lighting information
- **PBR Materials**: Physically Based Rendering for realistic surfaces
- **Tone Mapping**: Converting HDR to displayable colors
- **Shadow Maps**: Real-time shadow rendering

### Implementation Steps:

1. **Download Free HDRIs**
   - Visit: https://polyhaven.com/hdris
   - Download `.hdr` files (studio or outdoor)
   - Convert to `.exr` if needed

2. **Add RGBELoader**
   ```bash
   # Already included in three/examples/jsm
   ```

3. **Update ThreeScene.tsx**
   - Load HDRI texture
   - Set as scene.environment
   - Add environment map to materials
   - Configure tone mapping

4. **Enhance Shadows**
   - Enable shadow casting/receiving
   - Adjust shadow map size
   - Add PCF shadow filtering

### Resources:
- Poly Haven: https://polyhaven.com/hdris
- Three.js Examples: https://threejs.org/examples/#webgl_loader_gltf

---

## 📡 Month 3: WebSocket Control with Air Pen
**Status: PLANNED**

### Goals:
- [ ] Set up WebSocket server (Python/FastAPI)
- [ ] Connect Air Pen hardware to Python
- [ ] Send real-time position data to browser
- [ ] Move 3D model based on Air Pen input
- [ ] Add smooth interpolation for movement

### Technology Stack:
- **Backend**: Python + FastAPI + WebSockets
- **Frontend**: Native WebSocket API
- **Hardware**: Air Pen USB/Bluetooth connection

### Implementation Steps:

1. **Python WebSocket Server**
   ```bash
   pip install fastapi uvicorn websockets
   ```

2. **Read Air Pen Data**
   - Use `pyserial` for USB devices
   - Parse position/rotation data
   - Normalize to usable coordinates

3. **Frontend WebSocket Client**
   - Connect to `ws://localhost:8000`
   - Receive position updates
   - Update THREE.Object3D position/rotation

4. **Smooth Movement**
   - Implement lerp (linear interpolation)
   - Add velocity-based easing
   - Handle connection loss gracefully

### Resources:
- FastAPI WebSockets: https://fastapi.tiangolo.com/advanced/websockets/
- Three.js Lerp: `THREE.Vector3.lerp()`

---

## 🎨 Month 4: Custom Vertex & Fragment Shaders
**Status: PLANNED**

### Goals:
- [ ] Understand the rendering pipeline
- [ ] Write basic vertex shader (position transformation)
- [ ] Write basic fragment shader (color output)
- [ ] Create custom material with ShaderMaterial
- [ ] Build effects: glow, hologram, dissolve

### GLSL Fundamentals:
- **Vertex Shader**: Processes each vertex (position, normal, UV)
- **Fragment Shader**: Processes each pixel (color, lighting)
- **Uniforms**: Global variables (time, mouse position)
- **Varyings**: Data passed from vertex to fragment shader

### Projects to Build:

1. **Animated Glow Effect**
   ```glsl
   // Fragment shader with pulsing glow
   void main() {
     float glow = sin(uTime) * 0.5 + 0.5;
     gl_FragColor = vec4(color * glow, 1.0);
   }
   ```

2. **Holographic Material**
   - Fresnel effect
   - Scan lines
   - Color shifting

3. **Dissolve Effect**
   - Noise-based discard
   - Edge glow
   - Time-based animation

### Resources:
- The Book of Shaders: https://thebookofshaders.com/
- ShaderToy: https://www.shadertoy.com/
- Three.js Shader Examples: https://threejs.org/examples/?q=shader

---

## ⚛️ Month 5: React-Three-Fiber (R3F)
**Status: PLANNED**

### Goals:
- [ ] Convert vanilla Three.js to R3F
- [ ] Use declarative 3D components
- [ ] Integrate with React state management
- [ ] Add drei helpers (Environment, ContactShadows)
- [ ] Build interactive 3D UI

### Why R3F?
- Declarative syntax (like React DOM)
- Better React integration
- Automatic cleanup
- Powerful ecosystem (@react-three/drei, @react-three/postprocessing)

### Migration Steps:

1. **Install Dependencies**
   ```bash
   npm install @react-three/fiber @react-three/drei
   ```

2. **Convert ThreeScene**
   ```tsx
   import { Canvas } from '@react-three/fiber'
   import { OrbitControls, Environment } from '@react-three/drei'
   
   function Scene() {
     return (
       <Canvas>
         <OrbitControls />
         <Environment preset="studio" />
         <Model url="/ferrari.glb" />
       </Canvas>
     )
   }
   ```

3. **Add Interactions**
   - `onClick` events on meshes
   - `useFrame` for animations
   - `useLoader` for assets

### Projects:
- 3D Product Configurator
- Interactive Portfolio
- Physics-based racing game prototype

### Resources:
- R3F Docs: https://docs.pmnd.rs/react-three-fiber
- Drei Docs: https://github.com/pmndrs/drei
- CodeSandbox Examples: https://codesandbox.io/examples/package/@react-three/fiber

---

## ⚡ Month 6: Mobile Optimization
**Status: PLANNED**

### Goals:
- [ ] Reduce model complexity with Draco compression
- [ ] Implement LOD (Level of Detail)
- [ ] Optimize textures (compression, atlasing)
- [ ] Add progressive loading
- [ ] Test on real devices

### Optimization Techniques:

1. **Model Optimization**
   ```bash
   # Install GLTF Pipeline
   npm install -g gltf-pipeline
   
   # Compress GLB
   gltf-pipeline -i model.glb -o model-optimized.glb -d
   ```

2. **Texture Optimization**
   - Use `.webp` or `.ktx2` format
   - Resize to power-of-2 dimensions
   - Create mipmaps
   - Use texture atlases

3. **Performance Monitoring**
   ```typescript
   import { Stats } from '@react-three/drei'
   
   <Canvas>
     <Stats />
   </Canvas>
   ```

4. **Lazy Loading**
   - Load critical assets first
   - Use `Suspense` for code splitting
   - Display loading progress

5. **Mobile-Specific Adjustments**
   - Reduce polygon count for mobile
   - Disable shadows on low-end devices
   - Reduce render resolution
   - Limit particle counts

### Target Metrics:
- **FPS**: 60fps on desktop, 30fps on mobile
- **Load Time**: < 3 seconds on 4G
- **Bundle Size**: < 500KB gzipped
- **Memory**: < 200MB on mobile

### Tools:
- Chrome DevTools Performance tab
- WebGL Report: https://webglreport.com/
- Three.js Inspector: Browser extension

---

## 📚 Additional Resources

### Communities:
- Three.js Discourse: https://discourse.threejs.org/
- Pmnd Discord: https://discord.gg/poimandres
- Reddit r/threejs: https://reddit.com/r/threejs

### Learning:
- Three.js Journey: https://threejs-journey.com/ (paid, excellent)
- Three.js Fundamentals: https://threejsfundamentals.org/
- YouTube: Bruno Simon, Fireship, DesignCourse

### Assets:
- Models: Sketchfab, Poly Pizza, Quaternius
- HDRIs: Poly Haven, HDRI Haven
- Textures: Poly Haven, Texture Haven

---

## 🎯 Your Current Focus

**You are here:** Transitioning from Month 1 to Month 2

**Next Steps:**
1. Add HDRI environment lighting
2. Improve shadow quality
3. Experiment with different HDRIs for different moods
4. Document your learnings

**Command to start Month 2:**
Ask me: "Help me add HDRI lighting to my Ferrari scene"
