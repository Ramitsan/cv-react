export interface IProject {
  id: number;
  link: string;
  title: string;
  previewImage: string;
  technologies: Array<string>;
  details?: string;
  teamProject?: boolean;
  year?: string
}