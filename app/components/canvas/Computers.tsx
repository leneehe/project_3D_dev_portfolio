"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import useMobile from "../hooks/useIsMobile";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("/minimalistic_desktop/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={1.5} groundColor="black" />
			<pointLight intensity={0.7} position={isMobile ? [-0.6, 0.1, -0.7] : [1, -0.4, -0.2]} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 1.1 : 1.75}
				position={isMobile ? [-3.9, -2.5, -2.2] : [-3.9, -4.45, -2.5]}
				rotation={[0, 1.35, 0]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const {isMobile} = useMobile();

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
