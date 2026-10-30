export type ExamQuestion = {
  id?: string;
  question?: string;
  text?: string;
  type?: string;
  options?: string[];
  answer?: string | number | string[];
  correctAnswer?: string | number | string[];
  marks?: number;
  explanation?: string;
  [key: string]: any;
};

export type Examination = {
  id?: string;
  title?: string;
  subject?: string;
  className?: string;
  grade?: string;
  duration?: number;
  totalMarks?: number;
  questions?: ExamQuestion[];
  [key: string]: any;
};

export type OEMSData = {
  users?: any[];
  students?: any[];
  exams?: Examination[];
  attempts?: any[];
  results?: any[];
  school?: any;
  settings?: any;
  auditLogs?: any[];
  [key: string]: any;
};
