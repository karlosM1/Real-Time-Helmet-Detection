import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Violation } from "@/features/types";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ViolationCardProps {
  violation: Violation;
}

export default function ViolationCard({ violation }: ViolationCardProps) {
  const { plate_number, detected_at, violation_type, image_url } = violation;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{plate_number}</CardTitle>
          <Badge
            variant={violation_type === "No Helmet" ? "destructive" : "default"}
            className="flex gap-1 items-center"
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
              src={`data:image/jpeg;base64,${image_url}`}
              alt={`Violation by ${plate_number}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-3">
        <div className="text-sm text-muted-foreground">
          Recorded on {detected_at ? formatDate(detected_at) : "Unknown"}
        </div>
      </CardFooter>
    </Card>
  );
}
