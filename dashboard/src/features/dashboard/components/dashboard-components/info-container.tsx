import { Card, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@nextui-org/react";

interface InfoContainerProps {
  icon?: React.ReactNode;
  statistics?: string;
  title?: string;
  total?: number;
}

export function InfoContainer({
  icon,
  statistics,
  title,
  total,
}: InfoContainerProps) {
  return (
    <Card className="flex flex-col gap-2 w-full h-[130px] justify-center">
      <CardContent className="flex flex-row justify-between items-center px-6">
        <div>
          {icon}
          <h1 className="font-bold text-xl mb-1">{statistics}</h1>
          <p className="text-xs">{title}</p>
        </div>
        <div className="flex justify-centeritems-center">
          <CircularProgress
            size="lg"
            value={total}
            color="success"
            strokeWidth={4}
            showValueLabel={true}
            classNames={{
              svg: "w-16 h-16 drop-shadow-md",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
