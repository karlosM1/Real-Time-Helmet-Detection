import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import { DashboardSideBar } from "./child.lazy";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DashboardSideBar
          children={
            <div className="flex-1 w-full">
              <Outlet />
            </div>
          }
        />
      </ThemeProvider>
    </React.Fragment>
  );
}
