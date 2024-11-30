import { createLazyFileRoute } from "@tanstack/react-router";
import { WaveChartContainer } from "@/features/dashboard/components/dashboard-components/wave-chart-container";

export const Route = createLazyFileRoute("/dashboard-page/area-chart")({
  component: AreaChart,
});

function AreaChart() {
  return (
    <div>
      <WaveChartContainer />
    </div>
  );
}
