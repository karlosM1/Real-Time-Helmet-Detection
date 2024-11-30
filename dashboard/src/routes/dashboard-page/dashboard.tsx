import { InfoContainer } from "@/features/dashboard/components/dashboard-components/info-container";
import { createFileRoute } from "@tanstack/react-router";

import {
  TriangleAlert,
  ScanEye,
  UserRoundPlus,
  UsersRound,
  Moon,
  SunMedium,
  Bell,
  Settings,
} from "lucide-react";
import { WaveChartContainer } from "@/features/dashboard/components/dashboard-components/wave-chart-container";
import { PieChartContainer } from "@/features/dashboard/components/dashboard-components/pie-chart-container";
import { BarChartContainer } from "@/features/dashboard/components/dashboard-components/bar-chart-container";
import { RadarChartContainer } from "@/features/dashboard/components/dashboard-components/radar-chart-container";

export const Route = createFileRoute("/dashboard-page/dashboard")({
  component: DashboardPage,
});

export function DashboardPage() {
  return (
    <div className="mx-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <InfoContainer
            icon={<TriangleAlert />}
            statistics="3,432"
            title="Violations Sent"
            total={40}
          />
          <InfoContainer
            icon={<ScanEye />}
            statistics="04"
            title="Live Cameras"
            total={100}
          />
          <InfoContainer
            icon={<UserRoundPlus />}
            statistics="12,431"
            title="New Users"
            total={70}
          />
          <InfoContainer
            icon={<UsersRound />}
            statistics="23,463"
            title="Total Users"
            total={20}
          />
        </div>
        <div>
          <WaveChartContainer className="w-full" />
        </div>
        <div className="flex flex-row gap-4">
          <PieChartContainer className="w-full" pieSize="max-w-[300px]" />
          <BarChartContainer className="w-full" />
          <RadarChartContainer />
        </div>
      </div>
    </div>
  );
}
