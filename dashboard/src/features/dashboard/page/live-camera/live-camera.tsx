import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardSkeleton } from "@/components/shared/card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { Radar, Cog } from "lucide-react";

export function LiveCamera() {
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
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </CardBody>
            </Card>
          </Tab>
          <Tab
            key="settings"
            title={
              <div className="flex flex-row gap-2 items-center">
                <Cog />
                <span>Settings</span>
              </div>
            }
          >
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="null" title="Null">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
