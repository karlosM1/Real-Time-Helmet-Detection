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

interface ViolationsTableProps {
  violations: Violation[];
}

export default function ViolationsTable({ violations }: ViolationsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number Plate</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Helmet Status</TableHead>
            <TableHead className="text-right">Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {violations.map((violation, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {violation.plate_number}
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
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
