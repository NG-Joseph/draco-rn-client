const ChakraTheme = {
    // Chakra Colors
    Colors: {
      brand: {
        900: "#8287af",
        800: "#7c83db",
        700: "#b3bef6",
      },
      brandBlue: {
        900: "#0066FF",
      },
      tintGray: {
        900: "#FCFCFC",
      },
      errorRed: {
        600: "#CF3B3B",
      },
    },
    ComponentStyles: {
      Button: {
        baseStyle: {
          rounded: "md",
        },
        defaultProps: {
          _light: {
            _text: "white",
          },
          _dark: {
            _text: "white",
          },
          height: "40px",
          width: "90px",
        },
        variants: {
          primary: () => {
            return {
              _light: {
                bg: "brandBlue.900",
                _text: { color: "white" },
              },
              /*  _disabled: {
                color: "gray.200",
              }, */
              _dark: {
                bg: "brandBlue.900",
              },
            };
          },
          error: () => {
            return {
              _light: {
                bg: "errorRed.600",
                _text: { color: "white" },
              },
              /*  _disabled: {
                color: "gray.200",
              }, */
              _dark: {
                bg: "errorRed.600",
                _text: { color: "white" },
              },
            };
          },
        },
      },
      Text: {
        defaultProps: {
          fontFamily: "poppins-regular",
        },
        variants: {
          bold: () => {
            return {
              fontFamily: "poppins-bold",
            };
          },
          extraBold: () => {
            return {
              fontFamily: "poppins-extra-bold",
            };
          },
  
          title: () => {
            return {
              fontSize: "2xl",
              fontFamily: "poppins-extra-bold",
            };
          },
          error: () => {
            return {
              _light: {
                color: "red.500",
              },
              _dark: {
                color: "red.500",
              },
              fontSize: "xs",
            };
          },
          link: () => {
            return {
              _light: {
                color: "brandBlue.900",
              },
              _dark: {
                color: "brandBlue.900",
              },
            };
          },
        },
      },
      Heading: {
        defaultProps: {
          fontFamily: "poppins-regular",
        },
        variants: {
          bold: () => {
            return {
              fontFamily: "poppins-bold",
            };
          },
          extraBold: () => {
            return {
              fontFamily: "poppins-extra-bold",
            };
          },
  
          title: () => {
            return {
              fontSize: "2xl",
              fontFamily: "poppins-extra-bold",
            };
          },
          error: () => {
            return {
              _light: {
                color: "red.500",
              },
              _dark: {
                color: "red.500",
              },
              fontSize: "xs",
            };
          },
          link: () => {
            return {
              _light: {
                color: "brandBlue.900",
              },
              _dark: {
                color: "brandBlue.900",
              },
            };
          },
        },
      },
      Input: {
        defaultProps: {
          placeholderTextColor: "gray.500",
          _light: {
            bg: "white",
          },
          _dark: {
            bg: "white",
          },
        },
      },
      View: {
        baseStyle: ({ colorMode }: any) => {
          return {
            color: colorMode === "dark" ? "#000" : "#fff",
            fontWeight: "normal",
          };
        },
      },
      Box: {
          baseStyle: ({ colorMode }: any) => {
            return {
              color: colorMode === "dark" ? "#000" : "#fff",
              fontWeight: "normal",
            };
          },
        },
    },
    fontConfig: {
      Poppins: {
        100: {
          normal: "poppins-light",
        },
        200: {
          normal: "poppins-regular",
        },
        300: {
          normal: "poppins-semibold",
        },
        400: {
          normal: "poppins-bold",
        },
        500: {
          normal: "poppins-extrabold",
        },
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },
  };
  
  export default ChakraTheme;
  