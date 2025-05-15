import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Violation } from "@/features/types";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ImageOff, Loader2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const useBase64Image = (imageUrl: string) => {
  // Split the image path into date and filename
  const parts = imageUrl.split("/");
  const date = parts[0];
  const filename = parts.slice(1).join("/");

  console.log(`Fetching base64 image for: ${date}/${filename}`);

  return useQuery({
    queryKey: ["base64Image", date, filename],
    queryFn: async () => {
      try {
        const response = await axios.get(`/image_base64/${date}/${filename}`);
        console.log("Base64 image response received");
        return response.data.image;
      } catch (error) {
        console.error("Error fetching base64 image:", error);
        throw error;
      }
    },
    enabled: !!date && !!filename,
    staleTime: Infinity,
    retry: 1,
  });
};

interface ViolationCardProps {
  violation: Violation;
}

export default function ViolationCard({ violation }: ViolationCardProps) {
  const { plate_number, detected_at, violation_type, image_url } = violation;
  const [imgError, setImgError] = useState(false);

  const { data: base64Image, isLoading, isError } = useBase64Image(image_url);

  // const violationDate = detected_at.split("T")[0];

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
            {isLoading ? (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                <span className="text-sm">Loading image...</span>
              </div>
            ) : isError || imgError ? (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <ImageOff className="h-8 w-8 mb-2" />
                <span className="text-sm">Image not available</span>
              </div>
            ) : (
              <img
                src={`data:image/jpeg;base64,${base64Image}`}
                alt={`Violation by ${plate_number}`}
                className="object-cover w-full h-full"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
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
