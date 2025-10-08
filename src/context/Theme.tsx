/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";

const Theme = createContext({
  theme: "dark",
  setTheme: (_theme: string) => {},
});

export default Theme;
