const screens = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

const devices = {
  mobileS: `(min-width: ${screens.mobileS})`,
  mobileM: `(min-width: ${screens.mobileM})`,
  mobileL: `(min-width: ${screens.mobileL})`,
  tablet: `(min-width: ${screens.tablet})`,
  laptop: `(min-width: ${screens.laptop})`,
  desktop: `(min-width: ${screens.desktop})`,
  desktopL: `(min-width: ${screens.desktopL})`,
};

const breakpoints = {
  ...screens,
  ...devices,
};

const colors = {
  "base-title": "#272221",
  "base-subtitle": "#403937",
  "base-text": "#574F4D",
  "base-label": "#8D8686",
  "base-hover": "#D7D5D5",
  "base-button": "#E6E5E5",
  "base-input": "#EDEDED",
  "base-card": "#F3F2F2",
  background: "#fafafa",
  white: "#fff",
  "yellow-dark": "#C47F17",
  "yellow-light": "#F1E9C9",
  yellow: "#DBAC2C",
  "purple-dark": "#4B2995",
  "purple-light": "#EBE5F9",
  purple: "#8047F8",
};

const fontSizes = {
  micro: 10,
  tiny: 12,
  small: 14,
  base: 16,
  medium: 18,
  large: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
};

const fontFamilies = {
  title: "'Baloo 2', cursive",
  "main-sans": "'Roboto', sans-serif",
};

const fontWeights = {
  bold: 700,
  regular: 400,
};

const fonts = {
  paragraph: `${fontSizes.base} ${fontWeights.regular}/130% ${fontFamilies["main-sans"]}, sans-serif`,
};

export const defaultTheme = {
  breakpoints,
  colors,
  fonts,
  fontFamilies,
  fontSizes,
  fontWeights,
};
