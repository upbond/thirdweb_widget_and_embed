const themeColors = {
  black: "#000",
  white: "#fff",
  transparent: "transparent",
  red: {
    50: "#FFE5EB",
    100: "#FFB7C9",
    200: "#FF8AA6",
    300: "#FF5C83",
    400: "#FF2E60",
    500: "#EE0039",
    600: "#C5002F",
    700: "#9C0026",
    800: "#74001C",
    900: "#4B0012",
  },
  orange: {
    50: "#FFEDE5",
    100: "#FFCDB7",
    200: "#FFAD8A",
    300: "#FF8D5C",
    400: "#FF6D2E",
    500: "#EE4800",
    600: "#C53B00",
    700: "#9C2F00",
    800: "#742300",
    900: "#4B1600",
  },
  green: {
    50: "#E5FFEF",
    100: "#B7FFD4",
    200: "#8AFFB8",
    300: "#5CFF9D",
    400: "#2EFF81",
    500: "#00EE5F",
    600: "#00C54F",
    700: "#009C3F",
    800: "#00742E",
    900: "#004B1E",
  },
  teal: {
    50: "#E5FFFC",
    100: "#B7FFF6",
    200: "#8AFFF0",
    300: "#5CFFEB",
    400: "#2EFFE5",
    500: "#00EED1",
    600: "#00C5AD",
    700: "#009C89",
    800: "#007466",
    900: "#004B42",
  },
  blue: {
    50: "#E5F6FF",
    100: "#B7E5FF",
    200: "#8AD5FF",
    300: "#5CC4FF",
    400: "#2EB4FF",
    500: "#0098EE",
    600: "#007EC5",
    700: "#007EC5",
    800: "#004A74",
    900: "#00304B",
  },
  cyan: {
    50: "#E5FDFF",
    100: "#B7FBFF",
    200: "#8AF8FF",
    300: "#5CF5FF",
    400: "#2EF2FF",
    500: "#00E0EE",
    600: "#00BAC5",
    700: "#00939C",
    800: "#006D74",
    900: "#00464B",
  },
  purple: {
    50: "#F2E5FF",
    100: "#DBB7FF",
    200: "#C48AFF",
    300: "#AD5CFF",
    400: "#962EFF",
    500: "#7700EE",
    600: "#6300C5",
    700: "#4E009C",
    800: "#3A0074",
    900: "#25004B",
  },
  pink: {
    50: "#FFE5FC",
    100: "#FFB7F8",
    200: "#FF8AF3",
    300: "#FF5CEE",
    400: "#FF2EEA",
    500: "#EE00D6",
    600: "#C500B1",
    700: "#9C008D",
    800: "#740068",
    900: "#4B0043",
  },
  gray: {
    50: "#F2F2F7",
    100: "#E5E5EA",
    200: "#E5E5EA",
    300: "#D1D1D6",
    400: "#C7C7CC",
    500: "#AEAEB2",
    600: "#8E8E93",
    700: "#636366",
    800: "#3A3A3C",
    900: "#1C1C1E",
  },
  whiteAlpha: {
    10: "rgba(255, 255, 255, 0.1)",
    20: "rgba(255, 255, 255, 0.2)",
    30: "rgba(255, 255, 255, 0.3)",
    40: "rgba(255, 255, 255, 0.4)",
    50: "rgba(255, 255, 255, 0.5)",
    60: "rgba(255, 255, 255, 0.6)",
    70: "rgba(255, 255, 255, 0.7)",
    80: "rgba(255, 255, 255, 0.8)",
    90: "rgba(255, 255, 255, 0.9)",
    100: "rgba(255, 255, 255, 1)",
  },
 blackAlpha: {
    10: "rgba(0,0,0, 0.1)",
    20: "rgba(0,0,0, 0.2)",
    30: "rgba(0,0,0,0.3)",
    40: "rgba(0,0,0,0.4)",
    50: "rgba(0,0,0,0.5)",
    60: "rgba(0,0,0,0.6)",
    70: "rgba(0,0,0,0.7)",
    80: "rgba(0,0,0,0.8)",
    90: "rgba(0,0,0,0.9)",
    100: "rgba(0,0,0,1)",
  }
};

export const colors = {
  // straight from design
  backgroundLight: "#F4F4F4",
  backgroundDark: "#11141E",
  wordMark: "#262A36",
  heading: "#272E36",
  paragraph: "rgba(39, 46, 54, 0.9)",
  headingLight: "#F2FBFF",
  paragraphLight: "rgba(242, 251, 255, 0.8)",
  ...themeColors,
  primary: themeColors.blue,
  /**
   * @deprecated - use `purple` instead
   */
  twurple: themeColors.purple,
  /**
   * @deprecated - use `orange` instead
   */
  tworange: themeColors.orange,
  /**
   * @deprecated - use `red` instead
   */
  tworal: themeColors.red,
};