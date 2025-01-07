import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import { DashboardSideBar } from "./child.lazy";
import { HeaderButtons } from "@/components/shared/header-buttons";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DashboardSideBar
          children={
            <div className="flex flex-col w-full gap-6">
              <HeaderButtons />
              <div>
                <Outlet />
              </div>
            </div>
          }
        />
      </ThemeProvider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
