import React, { createContext, useState } from "react";

// Create context
export const NavbarContext = createContext([false, () => {}]);

// Provider component
const NavbarProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
