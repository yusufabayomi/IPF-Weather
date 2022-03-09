const size = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  desktopL: '1200px',
  desktopXL: '1400px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};
