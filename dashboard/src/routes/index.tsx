import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/dashboard/components/side-bar-components/app-siderbar";
import { DashboardSideBar } from "./child.lazy";

export const Route = createFileRoute("/")({
  component: Index,
});

export function Index() {
  return <>Hello</>;
}
