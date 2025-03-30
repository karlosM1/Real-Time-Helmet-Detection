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
  const { number_plate, timestamp, isHelmet, cropped_image } = violation;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{number_plate}</CardTitle>
          <Badge
            variant={isHelmet === "No Helmet" ? "destructive" : "default"}
            className="flex gap-1 items-center"
          >
            {isHelmet === "No Helmet" && <AlertTriangle className="h-3 w-3" />}
            {isHelmet}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <img
              src={`data:image/jpeg;base64,${cropped_image}`}
              alt={`Violation by ${number_plate}`}
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-3">
        <div className="text-sm text-muted-foreground">
          Recorded on {formatDate(timestamp)}
        </div>
      </CardFooter>
    </Card>
  );
}
