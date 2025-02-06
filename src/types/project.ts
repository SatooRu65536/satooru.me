import { IconKey } from '@/components/shares/Icon';

export interface Project {
  name: string;
  summary: string;
  tags: IconKey[];
  repository: string;
  site: string | undefined;
  updatedAt: string;
}

export interface GitHubEvent {
  repo: {
    url: string;
  };
}

export interface GitHubRepo {
  name: string;
  description: string;
  topics: string[];
  pushed_at: string;
  language: string;
  html_url: string;
  homepage: string;
}
