import { Bell, Settings } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export function PageHeader() {
  return (
    <div className="flex flex-row justify-end items-center">
      <ModeToggle />
      <Bell />
      <Settings />
    </div>
  );
}
