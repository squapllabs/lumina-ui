// ThemeProvider.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
}) => {
  const [theme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
