"use client";

import { createContext, useContext } from "react";
import useFullScreen from "../hooks/use-full-screen/useFullScreen.hook";

const HomeContext = createContext(undefined);

export default function HomeContextProvider({ children }: any) {
  /***********************************/
  /* use this pattern  */
  const fullScreenState = useFullScreen();
  /***********************************/

  return (
    <HomeContext.Provider
      value={
        {
          ...fullScreenState,
        } as any
      }
    >
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHomeContext must be used within a ContextProvider");
  }

  return useContext(HomeContext);
}
