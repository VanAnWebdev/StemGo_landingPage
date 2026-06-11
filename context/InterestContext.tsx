"use client";

import React, { createContext, useContext } from "react";
import { useInterestCounter } from "../hooks/useInterestCounter";

interface InterestContextType {
  count: number | null;
  loading: boolean;
  increment: () => void;
}

const InterestContext = createContext<InterestContextType>({
  count: null,
  loading: true,
  increment: () => {},
});

export function InterestProvider({ children }: { children: React.ReactNode }) {
  const { count, loading, increment } = useInterestCounter();
  return (
    <InterestContext.Provider value={{ count, loading, increment }}>
      {children}
    </InterestContext.Provider>
  );
}

export const useInterest = () => useContext(InterestContext);
