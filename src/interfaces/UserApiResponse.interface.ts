export interface UserAPIResponse {
  status_code?: number;
  response_type?: string;
  description?: string;
  data?: User;
}

export interface User {
  name?: string;
  lastname?: string;
  email?: string;
  social_media_login?: boolean;
}
