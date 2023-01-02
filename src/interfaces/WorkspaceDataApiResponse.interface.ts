export interface WorkspaceDataAPIResponse {
  status_code?: number;
  response_type?: string;
  description?: string;
  data?: Workspace;
}

export interface Workspace {
  status?: string;
  lab_id?: string;
  lab_title?: string;
  wss_vdi_uri?: string;
  vdi_password?: string;
}

export interface WorkspaceInstallAPIResponse {
  status_code?: number;
  response_type?: string;
  description?: string;
  data?: null;
}
