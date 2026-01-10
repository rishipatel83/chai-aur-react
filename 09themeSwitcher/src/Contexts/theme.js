import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//* here we directly provided provider rather than creating children calling by making a new file and all that stuff by just one line

export const ThemeProvider = ThemeContext.Provider;

//* we can also create our custom hooks 
//* here is the one hooks are nothing just a method here is the one 

export default function useTheme(){
   return useContext(ThemeContext);
}