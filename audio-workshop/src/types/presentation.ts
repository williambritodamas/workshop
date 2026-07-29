export interface SlideMeta {
  id: number;
  title: string;
  subtitle?: string;
  notes?: PresenterNote;
}

export interface PresenterNote {
  explanation: string;
  practicalExamples: string[];
  audienceQuestions: string[];
  liveDemos?: string[];
  curiosities?: string[];
}

export interface ImageCardProps {
  icon?: React.ReactNode;
  imageSrc?: string;
  title: string;
  description?: string;
  badge?: string;
}
