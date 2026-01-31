'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { Car, Loader2 } from 'lucide-react';

import { modelConfig } from './ModelConfig';

export default function ThreeScene() {
    const mountRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!mountRef.current) return;

        const mount = mountRef.current;

        // SCENE
        const scene = new THREE.Scene();

        // CAMERA
        const camera = new THREE.PerspectiveCamera(
            modelConfig.camera.fov,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(
            modelConfig.camera.position.x,
            modelConfig.camera.position.y,
            modelConfig.camera.position.z
        );

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        mount.appendChild(renderer.domElement);

        // CONTROLS
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = modelConfig.rotationSpeed;
        controls.maxPolarAngle = Math.PI / 2 - 0.1;
        controls.minPolarAngle = Math.PI / 4;

        // ... existing lighting code ...
        // HDRI ENVIRONMENT LIGHTING
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load(
            '/studio.hdr',
            (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
                console.log('HDRI environment loaded successfully');
            },
            undefined,
            (error) => {
                console.error('Error loading HDRI:', error);
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);
                const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
                dirLight.position.set(5, 10, 7.5);
                scene.add(dirLight);
            }
        );

        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-5, 3, -5);
        scene.add(fillLight);

        const rimLight = new THREE.SpotLight(0xff0000, 3);
        rimLight.position.set(-5, 5, -5);
        rimLight.angle = Math.PI / 6;
        rimLight.penumbra = 0.5;
        scene.add(rimLight);

        // LOAD MODEL
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);

        loader.load(
            '/ferrari.glb',
            (gltf) => {
                const model = gltf.scene;

                // Center and Scale
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());

                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = modelConfig.scale / maxDim;
                model.scale.setScalar(scale);

                box.setFromObject(model);
                box.getCenter(center);
                model.position.sub(center);

                // Apply Config Position
                model.position.x += modelConfig.position.x;
                model.position.y += modelConfig.position.y;
                model.position.z += modelConfig.position.z;

                // Initial rotation
                model.rotation.y = modelConfig.initialRotationY;

                scene.add(model);

                // Set controls focus
                controls.target.set(
                    modelConfig.position.x,
                    modelConfig.position.y,
                    modelConfig.position.z
                );
                controls.update();

                setIsLoading(false);
                console.log('Model loaded successfully');
            },
            (progress) => {
                const percent = (progress.loaded / progress.total * 100);
                console.log('Loading model...', percent + '%');
            },
            (error) => {
                console.error('Error loading model:', error);
                setIsLoading(false);

                // Fallback to a cube if model fails
                const geometry = new THREE.BoxGeometry();
                const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);
            }
        );

        // ANIMATION LOOP
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Updated by OrbitControls
            renderer.render(scene, camera);
        };

        animate();

        // RESIZE HANDLER
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // CLEANUP
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount) {
                mount.removeChild(renderer.domElement);
            }
            renderer.dispose();
            controls.dispose();
            dracoLoader.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} className="absolute inset-0 w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500">
                    <div className="relative flex flex-col items-center gap-6">
                        {/* Outer Glow Ring */}
                        <div className="absolute -inset-8 bg-red-600/20 blur-3xl rounded-full animate-pulse" />

                        <div className="relative">
                            {/* Spinning Loader */}
                            <Loader2 className="w-16 h-16 text-red-600 animate-spin transition-all duration-300" strokeWidth={1.5} />
                            {/* Centered Car Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-white font-black tracking-[0.3em] uppercase text-xs animate-pulse">
                                Loading Scuderia
                            </span>
                            <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-red-600 animate-[shimmer_2s_infinite]" style={{ width: '40%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
