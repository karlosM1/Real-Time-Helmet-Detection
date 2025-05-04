import { InfoContainer } from "@/features/dashboard/components/dashboard-components/info-container";
import { createFileRoute } from "@tanstack/react-router";

import {
  TriangleAlert,
  ScanEye,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import { WaveChartContainer } from "@/features/dashboard/components/dashboard-components/wave-chart-container";
import { PieChartContainer } from "@/features/dashboard/components/dashboard-components/pie-chart-container";
import { BarChartContainer } from "@/features/dashboard/components/dashboard-components/bar-chart-container";
import { RadarChartContainer } from "@/features/dashboard/components/dashboard-components/radar-chart-container";
import { useTotalUsers } from "@/hooks/use-total-users";
import { useTotalViolations } from "@/hooks/use-total-violation";

export const Route = createFileRoute("/dashboard-page/dashboard")({
  component: DashboardPage,
});

export function DashboardPage() {
  const { data: totalUsersData, isLoading, error } = useTotalUsers();
  const {
    data: totalViolationsData,
    isLoading: isLoadingViolations,
    error: violationsError,
  } = useTotalViolations();

  return (
    <div className="mx-20">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <InfoContainer
            icon={<TriangleAlert />}
            statistics={
              isLoadingViolations
                ? "Loading..."
                : violationsError
                  ? "Error"
                  : totalViolationsData?.total_violations.toLocaleString() ||
                    "0"
            }
            title="Violations Sent"
            total={
              totalViolationsData
                ? Math.min(
                    100,
                    (totalViolationsData.total_violations / 10000) * 100
                  )
                : 40
            }
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
            statistics={
              isLoading
                ? "Loading..."
                : error
                  ? "Error"
                  : totalUsersData?.total_users.toLocaleString() || "0"
            }
            title="Total Users"
            total={
              totalUsersData
                ? Math.min(100, (totalUsersData.total_users / 50000) * 100)
                : 20
            }
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
