import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Violation } from "@/features/types";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MapPin, Camera } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useUserName } from "../../hooks/useLiveCamera";

interface ViolationCardProps {
  violation: Violation;
}

const DETECTION_LOCATION = "Main Street Intersection, Downtown";

export default function ViolationCard({ violation }: ViolationCardProps) {
  const { plate_number, detected_at, violation_type, image_url } = violation;
  const { data: ownerName, isLoading, isError } = useUserName(plate_number);

  // const violationDate = detected_at.split("T")[0];

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="text-sm text-muted-foreground">
          Owner: {isLoading ? "Loading..." : isError ? "Unknown" : ownerName}
        </div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{plate_number}</CardTitle>
          <Badge
            variant={violation_type === "No Helmet" ? "destructive" : "default"}
            className="flex gap-1 items-center h-6 text-sm"
          >
            {violation_type === "No Helmet" && (
              <AlertTriangle className="h-3 w-3" />
            )}
            {violation_type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-38 w-full sm:h-40 md:h-50 lg:h-60">
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <img
              src={`/api/images/${image_url}`}
              alt={`Violation by ${plate_number}`}
              className="object-cover w-[200px] h-[200px]"
              loading="lazy"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-3 space-y-2">
        <div className="w-full space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{DETECTION_LOCATION}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Camera className="h-5 w-5" />
            <span>
              Recorded on {detected_at ? formatDate(detected_at) : "Unknown"}
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
