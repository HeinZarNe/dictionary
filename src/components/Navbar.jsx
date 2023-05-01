import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BiBook, BiMoon } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import Switch from "react-switch";
const Navbar = () => {
  const [checked, setIsChecked] = useState(false);
  const [Theme, setTheme] = useState("#000");

  // for handle Icon
  const handleChange = () => {
    setIsChecked((prevValue) => !prevValue);
    setTheme("#9333ea");
  };
  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div className="flex flex-row justify-between pb-5 dark:text-white ">
      {/* Logo */}
      <div className=" cursor-pointer hover:text-zinc-700 dark:text-zinc-500">
        <IconContext.Provider value={{ size: "2rem" }}>
          <BiBook />
        </IconContext.Provider>
      </div>
      <div className="flex gap-4 flex-row justify-center items-center">
        <div className="flex gap-2 flex-row justify-center items-center ">
          {/* Theme Changing */}
          <Switch
            onChange={() => handleChange()}
            checkedIcon={false}
            onColor="#9333ea"
            offColor="#89838f"
            uncheckedIcon={false}
            checked={checked}
            width={40}
            height={20}
          />
          {/* Theme Icon */}
          <div className=" ">
            <IconContext.Provider
              value={{ size: "1.3rem", style: { color: Theme } }}
            >
              <BsMoon />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
