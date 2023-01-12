import React, {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
} from "react";

export type ThemeModeValues = "light" | "dark";

type SoCraqueContextValues = {
  mode: ThemeModeValues;
  atualizarMode: (mode: ThemeModeValues) => void;
};

const SoCraqueContext = createContext<SoCraqueContextValues>(
  {} as SoCraqueContextValues
);

const SoCraqueProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [mode, setMode] = useState<ThemeModeValues>("light");

  const atualizarMode = (_mode: ThemeModeValues) => {
    setMode(_mode);
  };

  const values = {
    mode,
    atualizarMode,
  };

  return (
    <SoCraqueContext.Provider value={values}>
      {children}
    </SoCraqueContext.Provider>
  );
};

export const useSoCraque = () => {
  const context = useContext(SoCraqueContext);

  if (!context) {
    throw new Error(
      "useSoCraque deve ser utilizado dentro de um SoCraqueProvider"
    );
  }

  return context;
};

export default SoCraqueProvider;
