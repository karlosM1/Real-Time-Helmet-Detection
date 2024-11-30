import { createFileRoute } from "@tanstack/react-router";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/features/dashboard/components/side-bar-components/app-siderbar";
// import { DashboardSideBar } from "./child.lazy";
import { CircularProgress } from "@nextui-org/react";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  return (
    <div className="flex items-center justify-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </div>
  );
}
