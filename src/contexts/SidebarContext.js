import { createContext, useState } from "react";

export const SidebarContext = createContext(null)

export default function SidebarContextProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}