import { createLazyFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/dashboard/components/side-bar-components/app-siderbar";

export const Route = createLazyFileRoute("/child")({
  component: DashboardSideBar,
});

export function DashboardSideBar({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
