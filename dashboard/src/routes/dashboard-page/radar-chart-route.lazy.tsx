import { createLazyFileRoute } from "@tanstack/react-router";
import { RadarChartContainer } from "@/features/dashboard/components/dashboard-components/radar-chart-container";

export const Route = createLazyFileRoute("/dashboard-page/radar-chart-route")({
  component: RadarChartRoute,
});

function RadarChartRoute() {
  return (
    <div>
      <RadarChartContainer />
    </div>
  );
}
