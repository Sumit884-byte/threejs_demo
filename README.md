# 🏎️ Scuderia Ferrari 3D Experience

A premium, high-performance landing page built with **Next.js 15**, **Three.js**, and **Tailwind CSS v4**. Experience the pinnacle of Italian automotive engineering through an interactive 3D web experience.
<img width="1322" height="693" alt="image" src="https://github.com/user-attachments/assets/8132d9c1-cc18-446f-b491-b016903f72ec" />

## 🌟 Features

- **Interactive 3D Model**: High-fidelity Ferrari model with realistic HDRI environment lighting and reflections.
- **Dynamic Configuration**: Easily control model position, rotation speed, and scaling via a dedicated config file.
- **Premium UI/UX**: Built with a "Three Shades of Black" racing aesthetic, glassmorphism, and custom micro-animations.
- **Shadcn UI Integration**: Custom-themed components (Buttons, Inputs, Cards) styled for the Scuderia brand.
- **Responsive Design**: Fluid layouts that adapt from mobile to ultra-wide desktop displays.
- **Smart Loading**: Branded Lucide-react loading system for smooth 3D asset transitions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **3D Engine**: [Three.js](https://threejs.org/) with React hooks
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State/Logic**: TypeScript

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

## 🎮 Customization (ModelConfig.ts)

One of the core features is the easy-to-use `app/components/ModelConfig.ts`. You can adjust the 3D scene without touching any complex Three.js logic:

```typescript
export const modelConfig = {
    rotationSpeed: 0.8,    // Speed of the auto-orbit
    position: {
        x: 1.5,            // Side-to-side placement
        y: -0.5,           // Height adjustment
        z: 0.0
    },
    scale: 10              // Model size multiplier
}
```

## 📂 Project Structure

- `/app/components/ThreeScene.tsx`: Core 3D scene logic and GLTF loaders.
- `/app/components/ui`: Shadcn primitive components.
- `/public`: 3D assets (`.glb`), HDR environments, and textures.
- `/lib/utils.ts`: Tailwind class merging utilities.

---

Built with passion for speed and engineering excellence.
