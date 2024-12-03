import { useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import { DashboardSideBar } from "./child.lazy";
import { HeaderButtons } from "@/components/shared/header-buttons";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  console.log(theme);
  return (
    <>
      <ThemeProvider defaultTheme={theme} key={theme}>
        <DashboardSideBar
          children={
            <div className="flex flex-col w-full gap-6">
              <HeaderButtons theme={theme} setTheme={setTheme} />
              <div>
                <Outlet />
              </div>
            </div>
          }
        />
      </ThemeProvider>
    </>
  );
}
