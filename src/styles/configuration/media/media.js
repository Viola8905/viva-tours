const size = {
  mobile: "400px",
  tabletSmall: "600px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1400px",
  desktopS: "1280px",
  desktop: "1600px",
  desktopL: "1800px",
  cart: "800px",
};

const screen = {
  sm: `(min-width: ${size.mobile})`,
  tbSmaller: `(min-width: ${size.tabletSmall})`,
  tb: `(min-width: ${size.tablet})`,
  lp: `(min-width: ${size.laptop})`,
  md: `(min-width: ${size.laptopL})`,
  sLg: `(min-width: ${size.desktopS})`,
  lg: `(min-width: ${size.desktop})`,
  xlg: `(min-width: ${size.desktopL})`,
  cart: `(max-height: ${size.cart}) and (min-width: ${size.laptop})`,
};

export default screen;
