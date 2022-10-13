import { MeshProps, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Antenna: React.FC<MeshProps> = (props) => {
  /* const result = useLoader(GLTFLoader, "assets/3d/room.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    //@ts-ignore
    loader.setDRACOLoader(dracoLoader);
  }); */
  const result = useLoader(GLTFLoader, "assets/3d/room.glb");

  useFrame((state, delta) => {
    result.scene.rotation.y += 0.01;
  });

  return <primitive object={result.scene} />;
};

export default Antenna;
