import axios from "axios";
import { DashboardInfoContainer, TotalUser } from "./types";

export async function fetchDashboardViolationSent(): Promise<DashboardInfoContainer> {
  try {
    const response = await axios.get("/api/dashboard/response");
    return response.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}

export async function fetchTotalUser(): Promise<TotalUser> {
  try {
    const response = await axios.get("/api/dashboard/total-users");
    return response.data;
  } catch (error) {
    console.error("Error fetching total users:", error);
    throw error;
  }
}
