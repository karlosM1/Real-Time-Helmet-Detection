import axios from "axios";
import { ViolationsResponse } from "../types";

export async function uploadVideo(file: File): Promise<ViolationsResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post<ViolationsResponse>(
      "/api/upload_video/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Video uploaded successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading video:", error);
    throw error;
  }
}

export async function fetchViolations(): Promise<ViolationsResponse> {
  try {
    const response = await axios.get<ViolationsResponse>("/api/violations/");
    console.log("violation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching violations:", error);
    throw error;
  }
}
