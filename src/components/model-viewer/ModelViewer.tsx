import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { Canvas, MeshProps } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import ModelCanvas from "./ModelCanvas";
import { ModelViewerSettings } from "./types";

type ModelViewerProps = {
  url: string;
  meshProps: MeshProps;
};

const initialState: ModelViewerSettings = {
  shouldRotate: true,
  camera: {
    position: [-30, 35, -15],
    near: 30,
    far: 55,
    fov: 12,
  },
};
// function to get the size of the file
function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
// function that reads the file and returns the size
function getFileSize(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const size = formatBytes(event.loaded);
      resolve(size);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

// function that reads file at a given path and returns a file object






const ModelViewer: React.FC<ModelViewerProps> = ({ url, meshProps }) => {
  const [model, setModel] = useState<string>(url);
  const [input, setInputValue] = useState<string>("");
  const [settings, setSettings] = useState<ModelViewerSettings>(initialState);
  //let fileSize = getFileSize(getFile(url) as any);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <Canvas camera={settings.camera}>
          <ModelCanvas url={model} meshProps={meshProps} settings={settings} />
        </Canvas>
      </Suspense>
      <Box>
        <Input onChange={(e)=> {
          setInputValue(e.target.value)
        }} value={input} placeholder="Enter a url" />
        <Button onClick={() => {
          setModel(input)
        }}>Load</Button>
 
        <HStack>
          <Button
            onClick={() =>
              setSettings({ ...settings, shouldRotate: !settings.shouldRotate })
            }
          >
            Toggle Rotate
          </Button>
          <Button onClick={() => setModel(model)}>Reset</Button>
          <Button onClick={() => setModel(model)}>Download</Button>
        </HStack>
      </Box>
    </div>
  );
};

export default ModelViewer;
