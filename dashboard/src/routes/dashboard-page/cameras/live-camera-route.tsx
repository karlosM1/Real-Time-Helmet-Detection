import { createFileRoute } from "@tanstack/react-router";
import { LiveCamera } from "@/features/dashboard/page/live-camera/live-camera";

export const Route = createFileRoute(
  "/dashboard-page/cameras/live-camera-route"
)({
  component: LiveCameraRoute,
});

function LiveCameraRoute() {
  return (
    <div>
      <LiveCamera />
    </div>
  );
}
