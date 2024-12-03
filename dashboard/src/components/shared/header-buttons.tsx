import { Button, Switch } from "@nextui-org/react";
import { Sun, Moon, Bell, Cog } from "lucide-react";
import { PageTitle } from "./page-title";

interface HeaderButtonsProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export function HeaderButtons({ theme, setTheme }: HeaderButtonsProps) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between items-center mx-20">
      <PageTitle title="Dashboard" description="Welcome to Dashboard" />
      <div className="flex flex-row justify-around items-center">
        <Switch
          isSelected={theme === "light"}
          size="lg"
          color="success"
          startContent={<Moon />}
          endContent={<Sun />}
          onChange={toggleTheme}
        ></Switch>
        <Button color="primary" variant="light">
          <Bell />
        </Button>
        <Button color="primary" variant="light">
          <Cog />
        </Button>
      </div>
    </div>
  );
}
