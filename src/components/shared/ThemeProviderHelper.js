'use client'
import {ThemeProvider} from "next-themes";

const ThemeProviderHelper = ({children}) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default ThemeProviderHelper