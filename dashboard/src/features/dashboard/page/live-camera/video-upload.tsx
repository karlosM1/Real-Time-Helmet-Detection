import type React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import { uploadVideo } from "@/features/api/live.service";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LiveStream from "./live-stream";

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const uploadMutation = useMutation({
    mutationFn: uploadVideo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["violations"] });
      setUploadProgress(100);
      if (data?.video_url) {
        const backendUrl = ""; // adjust for production endpoint
        setVideoPreviewUrl(`${backendUrl}${data.video_url}`);
      }
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setUploadProgress(0);

      const previewUrl = URL.createObjectURL(selectedFile);
      setVideoPreviewUrl(previewUrl);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 200);

    try {
      await uploadMutation.mutateAsync(file);
      clearInterval(interval);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      clearInterval(interval);
      setUploadProgress(0);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Traffic Video</CardTitle>
        <CardDescription>
          Upload a video to detect traffic violations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              id="video"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              disabled={uploadMutation.isPending}
            />
          </div>
          {/* {videoPreviewUrl && (
            <div className="mt-4">
              <video
                src={videoPreviewUrl}
                controls
                className="w-full max-w-xl"
              />
            </div>
          )} */}
          {/* {uploadMutation.isPending || uploadMutation.isSuccess ? (
            <LiveStream />
          ) : null} */}
          <div className="p-4">
            <LiveStream />
          </div>{" "}
          {uploadProgress > 0 && (
            <div className="space-y-2">
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-muted-foreground">
                {uploadProgress < 100
                  ? `Uploading: ${uploadProgress}%`
                  : "Upload complete"}
              </p>
            </div>
          )}
          {uploadMutation.isSuccess && (
            <Alert
              variant="default"
              className="bg-green-100 border-green-300 text-green-900 dark:bg-green-900 dark:border-green-700 dark:text-green-100"
            >
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Video uploaded successfully. Violations have been detected.
              </AlertDescription>
            </Alert>
          )}
          {uploadMutation.isError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {uploadMutation.error instanceof Error
                  ? uploadMutation.error.message
                  : "Failed to upload video. Please try again."}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleUpload}
          disabled={!file || uploadMutation.isPending}
          className="w-full sm:w-auto"
        >
          {uploadMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Uploading...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Video
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
