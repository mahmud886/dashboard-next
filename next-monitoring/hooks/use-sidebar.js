"use client"
import React, { createContext, useContext, useState } from "react";

// Create a SidebarContext with default values
const SidebarContext = createContext({
  isMinimized: false,
  toggle: () => {},
});

// SidebarProvider component that provides the state
export const SidebarProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggle = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isMinimized, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
