// "use client";
// import {useTheme} from "next-themes";
//
// const ThemeToggle = () => {
//     // Use the useTheme hook to access theme-related information and functions
//     const {systemTheme, theme, setTheme} = useTheme();
//
//     // Determine the current theme (either "light" or "dark")
//     const currentTheme = theme === "system" ? systemTheme : theme;
//
//     return (
//         <article className={`bg-white rounded-full w-max mr-4 bottom-3 fixed right-0 z-40`}>
//             <div className="relative flex flex-wrap items-center">
//                 {/* Input checkbox acting as the theme toggle button */}
//                 <label htmlFor={`theme-toggle`}></label>
//                 <input
//                     name={`theme-toggle`}
//                     // Set the value of the checkbox based on the current theme
//                     checked={currentTheme === "light"}
//                     // Prevent the checkbox from being interacted with directly (the toggle is handled through the label)
//                     onChange={() => {
//                     }}
//                     // When the label is clicked, toggle the theme between "light" and "dark"
//                     onClick={() => {
//                         theme === "dark" ? setTheme("light") : setTheme("dark");
//                     }}
//                     className={`peer relative h-10 w-20 cursor-pointer appearance-none rounded-full ring-2 ring-inset
//             ring-light-gold transition-all duration-300 bg-black
//             dark:after:content-["🌙"] after:content-["☀️"] after:flex after:justify-center after:items-center after:text-2xl
//             after:absolute after:top-0 after:left-0 after:h-10 after:w-10
//             after:rounded-full after:bg-black after:ring-2 after:ring-inset after:ring-light-gold after:transition-all
//
//             checked:bg-primary-blue checked:ring-alternative-blue checked:after:left-10 checked:after:bg-light-blue
//             checked:after:ring-alternative-blue hover:ring-primary-blue after:hover:ring-alternative-blue
//             dark:hover:ring-primary-gold dark:after:hover:ring-primary-gold
//
//             checked:hover:bg-primary-blue checked:hover:ring-primary-blue checked:after:hover:ring-alternative-blue
//             checked:focus:bg-light-blue checked:focus:ring-alternative-blue
//             checked:after:focus:ring-alternative-blue
//             focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200
//             disabled:after:ring-slate-300`}
//                     type="checkbox"
//                     value=""
//                     id="theme-toggle"
//                 />
//             </div>
//         </article>
//     );
// };
//
// export default ThemeToggle;

"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  // const [themeFlag, setThemeFlag] = useState(false);

  // Use the useTheme hook to access theme-related information and functions
  const { systemTheme, theme, setTheme } = useTheme();

  // Determine the current theme (either "light" or "dark")
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (systemTheme === "light" && theme === "system") {
    setTheme("dark");
  }

  return (
    <article
      className={`bg-white rounded-full w-max mr-4 bottom-3 fixed right-0 z-40`}
    >
      <div className="relative flex flex-wrap items-center">
        {/* Input checkbox acting as the theme toggle button */}
        <label htmlFor={`theme-toggle`}></label>
        <input
          name={`theme-toggle`}
          // Set the value of the checkbox based on the current theme
          checked={currentTheme === "light"}
          // Prevent the checkbox from being interacted with directly (the toggle is handled through the label)
          onChange={() => {}}
          // When the label is clicked, toggle the theme between "light" and "dark"
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          className={`peer relative h-10 w-20 cursor-pointer appearance-none rounded-full ring-2 ring-inset
            ring-light-gold transition-all duration-300 bg-black
            dark:after:content-["🌙"] after:content-["☀️"] after:flex after:justify-center after:items-center after:text-2xl
            after:absolute after:top-0 after:left-0 after:h-10 after:w-10
            after:rounded-full after:bg-black after:ring-2 after:ring-inset after:ring-light-gold after:transition-all

            checked:bg-primary-blue checked:ring-alternative-blue checked:after:left-10 checked:after:bg-light-blue
            checked:after:ring-alternative-blue hover:ring-primary-blue after:hover:ring-alternative-blue
            dark:hover:ring-primary-gold dark:after:hover:ring-primary-gold

            checked:hover:bg-primary-blue checked:hover:ring-primary-blue checked:after:hover:ring-alternative-blue 
            checked:focus:bg-light-blue checked:focus:ring-alternative-blue
            checked:after:focus:ring-alternative-blue 
            focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200
            disabled:after:ring-slate-300`}
          type="checkbox"
          value=""
          id="theme-toggle"
        />
      </div>
    </article>
  );
};

export default ThemeToggle;
