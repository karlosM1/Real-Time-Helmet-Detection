import axios from "axios";
import { ViolationsResponse } from "../types";

export async function uploadVideo(file: File): Promise<ViolationsResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post<ViolationsResponse>(
      `${import.meta.env.VITE_BASE_URL}upload_video/`,
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
    const response = await axios.get<ViolationsResponse>(
      `${import.meta.env.VITE_BASE_URL}violations/`
    );
    console.log("violation", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching violations:", error);
    throw error;

    return {
      violations: [
        {
          number_plate: "KL38°E5196",
          timestamp: "2025-03-30T09:08:27.326727",
          isHelmet: "No Helmet",
          cropped_image:
            "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",
        },
        {
          number_plate: "HL.07BU.5S04",
          timestamp: "2025-03-30T09:11:08.233705",
          isHelmet: "No Helmet",
          cropped_image:
            "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",
        },
      ],
    };
  }
}
