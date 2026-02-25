import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);

    // Create a sphere of points
    const points = useMemo(() => {
        const p = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 1.2 * Math.sqrt(Math.random());
            p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            p[i * 3 + 2] = radius * Math.cos(phi);
        }
        return p;
    }, []);

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export const CanvasBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-dark overflow-hidden">
            <div className="absolute inset-0 radiant-bg opacity-50" />
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    );
};
