import { createLazyFileRoute } from "@tanstack/react-router";
import { BarChartContainer } from "@/features/dashboard/components/dashboard-components/bar-chart-container";
export const Route = createLazyFileRoute("/dashboard-page/bar-chart-route")({
  component: BarChartRoute,
});

function BarChartRoute() {
  return (
    <div>
      <BarChartContainer />
    </div>
  );
}
