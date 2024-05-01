export interface IProject {
  id: number;
  title: string;
  linkToRepository?: string;
  linkToDeploy?: string;
  previewImage: string;
  technologies: Array<string>;
  details?: string;
  teamProject?: boolean;
  year?: string
}