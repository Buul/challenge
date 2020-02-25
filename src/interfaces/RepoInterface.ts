import { UsertInterface } from './UsertInterface';

export interface RepoInterface {
  id: string;
  full_name: string;
  html_url: string;
  owner: UsertInterface;
}
