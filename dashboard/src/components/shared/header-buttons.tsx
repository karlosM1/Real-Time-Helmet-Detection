import { Button, Switch } from "@nextui-org/react";
import { Sun, Moon, Bell, Cog } from "lucide-react";
import { PageTitle } from "./page-title";
import { ModeToggle } from "../mode-toggle";

export function HeaderButtons() {
  return (
    <div className="flex justify-between items-center mx-20">
      <PageTitle title="Dashboard" description="Welcome to Dashboard" />
      <div className="flex flex-row justify-around items-center">
        <ModeToggle />
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
