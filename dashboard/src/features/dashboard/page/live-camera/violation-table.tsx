/* eslint-disable react-hooks/rules-of-hooks */
import { formatDate } from "@/lib/utils";
import { Violation } from "@/features/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserName } from "../../hooks/useLiveCamera";

interface ViolationsTableProps {
  violations: Violation[];
}

const DETECTION_LOCATION = "Main Street Intersection, Downtown";

export default function ViolationsTable({ violations }: ViolationsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Owner</TableHead>
            <TableHead>Number Plate</TableHead>
            <TableHead>Detected at</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Helmet Status</TableHead>
            <TableHead className="text-right">Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {violations.map((violation, index) => {
            const {
              data: ownerName,
              isLoading,
              isError,
            } = useUserName(violation.plate_number);
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {isLoading ? "Loading..." : isError ? "Unknown" : ownerName}
                </TableCell>
                <TableCell className="font-medium">
                  {violation.plate_number}
                </TableCell>
                <TableCell className="font-medium">
                  {DETECTION_LOCATION}
                </TableCell>
                <TableCell>{formatDate(violation.detected_at)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      violation.violation_type === "No Helmet"
                        ? "destructive"
                        : "default"
                    }
                    className="flex gap-1 items-center"
                  >
                    {violation.violation_type === "No Helmet" && (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {violation.violation_type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          Violation Image - {violation.plate_number}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex items-center justify-center relative h-[400px] w-full mt-4">
                        <img
                          src={`/api/images/${violation.image_url}`}
                          alt={`Violation by ${violation.plate_number}`}
                          className="object-cover w-[200px] h-[200px]"
                          loading="lazy"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
