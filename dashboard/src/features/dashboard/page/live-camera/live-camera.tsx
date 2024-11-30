import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function liveCamera() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <Card>
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        </Card>
        <Card>
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        </Card>
      </div>
      <div>Recent Events</div>
    </div>
  );
}
