import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import { DashboardSideBar } from "./child.lazy";
import { Switch } from "@nextui-org/react";
import { PageTitle } from "@/components/shared/page-title";
import { Sun, Moon, Bell, Cog } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DashboardSideBar
          children={
            <div className="flex flex-col w-full gap-6">
              <div className="flex justify-between items-center mx-20">
                <PageTitle
                  title="Dashboard"
                  description="Welcome to Dashboard"
                />
                <div className="flex flex-row justify-around items-center gap-4">
                  <Switch
                    defaultSelected
                    size="lg"
                    color="success"
                    startContent={<Sun />}
                    endContent={<Moon />}
                  ></Switch>
                  <Bell />
                  <Cog />
                </div>
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          }
        />
      </ThemeProvider>
    </React.Fragment>
  );
}
