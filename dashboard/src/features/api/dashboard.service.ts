import axios from "axios";
import { DashboardInfoContainer } from "./types";

export async function fetchDashboardViolationSent(): Promise<DashboardInfoContainer> {
  try {
    const response = await axios.get("/api/dashboard/response");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}
