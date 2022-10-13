import { useGLTF } from "@react-three/drei";
import { Canvas, MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelViewerSettings } from "./types";

type ModelCanvasProps = { 
  /** This can either be a cdn url or file path*/ 
  url: string;
  meshProps: MeshProps;
  settings: ModelViewerSettings;
};

const ModelCanvas: React.FC<ModelCanvasProps> = ({
  url,
  meshProps,
  settings,
}) => {
  //const result1 = useLoader(GLTFLoader, url);
  const result  = useGLTF(url, true)

  useFrame((state, delta) => {
    if (settings.shouldRotate) result.scene.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={result.scene} {...meshProps} />
    </>
  );
};

export default ModelCanvas;
