import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "dracula";
}

function DarkLightMode() {
  const [mode, setMode] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  const changeMode = () => {
    setMode((prev) => {
      return prev === "dracula" ? "light" : "dracula";
    });
  };
  // #282a36
  return (
    <button className="cursor-pointer text-4xl" onClick={changeMode}>
      {mode == "dracula" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default DarkLightMode;
