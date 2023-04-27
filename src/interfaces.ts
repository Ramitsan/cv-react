export interface IProject {
  id: number;
  link: string;
  title: string;
  previewImage: string;
  technologies: string
  details?: string;
  teamProject?: boolean;
}