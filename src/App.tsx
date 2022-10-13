//import Box from "./components/Box";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import ChakraTheme from "./config/chakra.config";
import TopNavigation from "./components/navigation/Navbar";
import { Navigation } from "./routes/NavigationIndex";
import { useState } from "react";

const theme = extendTheme({
  colors: ChakraTheme.Colors,
  components: ChakraTheme.ComponentStyles,
  fontConfig: ChakraTheme.fontConfig,
  fonts: ChakraTheme.fonts,
  config: { useSystemColorMode: true, initialColorMode: "light" },
});
const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        {/* <Canvas camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Antenna position={[1.2, 0, 0]} />
        </Suspense>
      </Canvas> */}
        {/* <ClickToUpload onFileUpload={(file) => console.log(file)} accept=".glb" multiple={false}> 
        <div>Click to upload</div>
      
      </ClickToUpload> */}
        <TopNavigation />
        <Box h={"90vh"} mx={"10px"}>
          <Navigation />
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default App;
