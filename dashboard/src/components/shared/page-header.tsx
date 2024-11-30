import { Moon, SunMedium, Bell, Settings } from "lucide-react";
import { Switch } from "@nextui-org/react";

export function PageHeader() {
  return (
    <div className="flex flex-row justify-end items-center">
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<SunMedium />}
        endContent={<Moon />}
      ></Switch>
      <Bell />
      <Settings />
    </div>
  );
}
