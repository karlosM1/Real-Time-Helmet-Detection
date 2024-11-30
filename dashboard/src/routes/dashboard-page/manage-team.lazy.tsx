import { createLazyFileRoute } from "@tanstack/react-router";
import { ManageTable } from "@/features/dashboard/page/manage-team/manage-table";

export const Route = createLazyFileRoute("/dashboard-page/manage-team")({
  component: ManageTeamDashboard,
});

function ManageTeamDashboard() {
  return (
    <div className="mx-20">
      <ManageTable />
    </div>
  );
}
