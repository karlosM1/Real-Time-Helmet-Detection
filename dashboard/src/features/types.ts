export interface Violation {
  number_plate: string;
  timestamp: string;
  isHelmet: string;
  cropped_image: string;
}

export interface ViolationsResponse {
  violations: Violation[];
}
