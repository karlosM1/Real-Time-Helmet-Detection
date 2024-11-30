import { createLazyFileRoute } from "@tanstack/react-router";
import { PieChartContainer } from "@/features/dashboard/components/dashboard-components/pie-chart-container";
export const Route = createLazyFileRoute("/dashboard-page/pie-chart-route")({
  component: PieChartRoute,
});

function PieChartRoute() {
  return (
    <div>
      <PieChartContainer />
    </div>
  );
}
