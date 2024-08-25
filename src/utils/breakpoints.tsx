const breakpoints = {
    mobile: '375px',
    tablet: '768px',
    desktop: '1240px',
  };
  
  const screens = {
    sm: `(min-width : ${breakpoints.mobile})`,
    md: `(min-width : ${breakpoints.tablet})`,
    lg: `(min-width : ${breakpoints.desktop})`,
  };
  
  
  export default screens;