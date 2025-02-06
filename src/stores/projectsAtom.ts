import { Project } from '@/types/project';
import { atom } from 'jotai';
import { ofetch } from 'ofetch';

async function fetchProjects() {
  try {
    const url = new URL('/projects', process.env.NEXT_PUBLIC_API_URL);
    return await ofetch<Project[]>(url.toString(), { parseResponse: JSON.parse });
  } catch (e) {
    return [];
  }
}

export const projectsAtom = atom<Promise<Project[]>>(async () => await fetchProjects());
