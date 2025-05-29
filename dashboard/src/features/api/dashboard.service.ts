import axios from "axios";
import { DashboardInfoContainer } from "./types";
import type { TotalUser } from "@/hooks/use-total-users";
import type { TotalViolations } from "@/hooks/use-total-violation";

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
    const response = await axios.get<TotalUser>("/api/dashboard/total-users");
    return response.data;
  } catch (error) {
    console.error("Error fetching total users:", error);
    throw error;
  }
}

export async function fetchTotalViolations(): Promise<TotalViolations> {
  try {
    const response = await axios.get<TotalViolations>(
      "/api/dashboard/total-violations"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching total violations:", error);
    throw error;
  }
}

export const fetchUserName = async (plate_number: string): Promise<string> => {
  const response = await fetch(
    `/api/dashboard/user-name?plate_number=${plate_number}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user name");
  }
  const data = await response.json();
  return data.name;
};
