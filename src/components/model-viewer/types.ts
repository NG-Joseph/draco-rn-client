export type ModelViewerSettings = {
    shouldRotate: boolean;
    camera: {
      position: [number, number, number];
      near: number;
      far: number;
      fov: number;
    };
  };