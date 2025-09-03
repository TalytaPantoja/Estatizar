import React, { createContext, useContext, useState, useEffect } from 'react';
import { css } from 'styled-components';

// Define breakpoints
const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
};

// Create a context for responsiveness
const ResponsiveContext = createContext({
  width: window.innerWidth,
  breakpoint: 'desktop',
});

// Helper function to get breakpoint based on width
const getBreakpoint = (width) => {
  if (width < breakpoints.mobile) return 'mobile';
  if (width < breakpoints.tablet) return 'tablet';
  if (width < breakpoints.desktop) return 'desktop';
  if (width < breakpoints.largeDesktop) return 'largeDesktop';
  return 'extraLarge';
};

// Provider component
export const ResponsiveProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setBreakpoint(getBreakpoint(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ResponsiveContext.Provider value={{ width, breakpoint }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

// Custom hook to use responsiveness context
export const useResponsive = () => useContext(ResponsiveContext);

// Styled-components media query helper
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
