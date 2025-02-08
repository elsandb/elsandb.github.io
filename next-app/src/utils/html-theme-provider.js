"use client";
import { useEffect, useState } from 'react';

function getSystemThemePreference() {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark'; // default to light if window is undefined
}

const HtmlThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // default theme
  
    useEffect(() => {
      // Update the theme based on the system preference
      const systemTheme = getSystemThemePreference();
      setTheme(systemTheme);
  
      // Add a media query listener to update the theme when the system preference changes
      // Use the window.matchMedia API to check the user's preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      // Callback function to handle changes to the media query
      const handleMediaQueryChange = () => {
        setTheme(mediaQuery.matches ? 'dark' : 'light');
      };
      // Add media query listener
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        // Clean up media query listener
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    }, []);
  
    return (
      <html lang="en" data-bs-theme={`${theme}`}>
        {children}
      </html>
    );
}

export default HtmlThemeProvider