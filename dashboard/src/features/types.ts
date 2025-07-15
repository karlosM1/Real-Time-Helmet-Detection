export interface Violation {
  plate_number: string;
  violation_type: string;
  detected_at: string;
  image_url: string;
}

export interface ViolationsResponse {
  violations: Violation[];
  video_url: string;
}
