export const lightTheme = {
  body: '#FFFFFF',
  text: '#040C18',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '#254061',
  textRgba: '0,0,0',
};

export const DarkTheme = {
  body: '#040C18',
  text: '#FFFFFF',
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: '252, 246, 244',
  bodyRgba: '0,0,0',
};

// You can also use these breakpoints after importing it and use it as breakpoints.sm #040c18
export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = key => {
  return style => `@media (max-width: ${key}em) { ${style} }`;
};
