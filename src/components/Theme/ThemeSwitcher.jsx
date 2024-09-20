import { Button } from "@nextui-org/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Button color="primary" onClick={handleToggle}>
        {isDarkMode ? (
          <Sun size={22} strokeWidth={1.5} />
        ) : (
          <Moon strokeWidth={1.5} />
        )}
      </Button>
    </>
  );
};
