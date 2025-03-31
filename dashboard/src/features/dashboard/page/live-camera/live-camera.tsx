import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { CardSkeleton } from "@/components/shared/card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Radar, Cog, AlertTriangle } from "lucide-react";
import { useLiveCamera } from "../../hooks/useLiveCamera";
import ViolationCard from "./violation-card";
import { CardContent, CardTitle } from "@/components/ui/card";
import ViolationsTable from "./violation-table";

export function LiveCamera() {
  const { data, isLoading, isError, error } = useLiveCamera();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 mx-20">
        <div className="flex flex-row gap-4">
          <CardSkeleton />
          <CardSkeleton />
        </div>
        <Skeleton className="h-[525px] w-full rounded-xl" />
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="w-full bg-destructive/10">
        <CardHeader>
          <CardTitle className="text-destructive">
            Error Loading Violations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {error instanceof Error
              ? error.message
              : "An unknown error occurred"}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4 mx-20">
      <div className="flex flex-row gap-4">
        <Card>
          <Skeleton className="h-[525px] w-[830px] rounded-xl" />
        </Card>
        <Card>
          <Skeleton className="h-[525px] w-[830px] rounded-xl" />
        </Card>
      </div>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab
            key="detection"
            title={
              <div className="flex flex-row gap-2 items-center">
                <Radar />
                <span>Recent Detection</span>
              </div>
            }
          >
            <Card>
              <CardBody className="flex flex-row gap-4">
                {data?.violations && data.violations.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.violations.map((violation, index) => (
                      <ViolationCard key={index} violation={violation} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-medium">No Violations Found</h3>
                    <p className="text-muted-foreground mt-2">
                      Upload a video to detect traffic violations.
                    </p>
                  </div>
                )}
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="settings"
            title={
              <div className="flex flex-row gap-2 items-center">
                <Cog />
                <span>Table View</span>
              </div>
            }
          >
            <ViolationsTable violations={data?.violations || []} />
            <Tab key="null" title="Null">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
