import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "../config/axios.config";
import { useEffect, useState } from "react";
import ClickToUpload from "../components/click-to-upload/ClickToUpload";
import ModelViewer from "../components/model-viewer/ModelViewer";

type ModelInfo = {
  fileName: string;
  fileUrl: string;
};
const Home: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showProgress, setShowProgress] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [modelInfo, setModelInfo] = useState<ModelInfo | null>({
    fileName: "room.glb",
    fileUrl: "assets/3d/room.glb",
  });
  const [hover, setHover] = useState(false);

  return (
    <Box my={"20px"}>
      <Flex
        wrap={"wrap"}
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        <Box w={"600px"} maxH={"400px"} bg={"blackAlpha.100"}>
          <ModelViewer url={modelInfo?.fileUrl!} meshProps={{}} />
        </Box>
        <VStack spacing={20}>
          <ClickToUpload
            onFileUpload={(file) => {
              setShowProgress(true);
              const form = new FormData();
              form.append("file", file, file.name);
              axios
                .post("/upload-model", form, {
                  onUploadProgress: (e) => {
                    console.log("loaded:", e.loaded);
                    console.log("total:", e.total);
                    setProgress((e.loaded / e.total) * 100);
                  },
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((response) => {
                  const { data } = response;
                  setModelInfo({
                    fileName: data.fileName,
                    fileUrl: data.fileUrl,
                  });
                  if (data.fileUrl) {
                    console.log(data.fileUrl);
                    axios
                      .get(
                        modelInfo?.fileUrl!,
                        {
                          baseURL: "",
                          /* withCredentials: false, */
                        }
                      )
                      .then((response) => {
                        setShowProgress(false);
                        setProgress(0);
                        console.log(response);
                      });
                  }
                });
            }}
            accept=".glb, .gltf"
            multiple={false}
          >
            <Box
              w={"400px"}
              h={"400px"}
              bg={hover ? "blue.200" : "red.200"}
              onPointerOver={() => setHover(true)}
              onPointerOut={() => setHover(false)}
            >
              <Box m={"auto"}>
                <VStack>
                  <Text fontSize="18px" mt={3} mb={2}>
                    Click to upload file
                  </Text>
                  <ArrowDownIcon />
                </VStack>
              </Box>
            </Box>
          </ClickToUpload>
          <Box p={6} h={"200px"} w={"400px"}>
            {showProgress && (
              <Progress
                size={"md"}
                /*  bg={"red.200"}
            colorScheme={"red"} */
                value={progress}
                hasStripe={true}
                max={100}
              />
            )}
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
