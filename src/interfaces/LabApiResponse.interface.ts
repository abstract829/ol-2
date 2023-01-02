export interface LabAPIResponse {
  status_code?: number;
  response_type?: string;
  description?: string;
  data?: Lab;
}

export interface Lab {
  _id?: string;
  version?: string;
  name?: string;
  icon?: string;
  category?: string;
  infrastructure?: string;
  title?: string;
  description?: string;
  access?: string;
  difficulty?: number;
  time?: number;
  skills_required?: string[];
  skills_learn?: string[];
  tags?: string[];
  repository?: string;
  repo_lab_path?: string;
  references?: Reference[];
  software?: Software[];
  diagrams?: Diagram[];
  docs?: Challenges;
  challenges?: Challenges;
}

export interface Challenges {
  _id?: null;
  title?: string;
  details?: Details;
}

export interface Details {
  _id?: null;
  intro?: Finish;
  steps?: Finish[];
  finish?: Finish;
}

export interface Finish {
  _id?: null;
  title?: null | string;
  text?: string;
  verify?: null | string;
}

export interface Diagram {
  _id?: null;
  name?: string;
  output_path?: string;
}

export interface Reference {
  _id?: null;
  url?: string;
  title?: string;
  type?: string;
}

export interface Software {
  _id?: null;
  name?: string;
  url?: string;
  license?: string;
  version?: string;
}
