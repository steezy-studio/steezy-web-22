import { Areas, Project, Area } from "../generated/types";

export const enhanceProjects = (projects: Project[], areas: Areas) => {
  return projects.map((project) => {
    return {
      ...project,
      areas: areas.items.filter((area) => {
        if (area._slug === "all-projects") return false;
        return area.projects.some((item) => item._id === project._id);
      }),
    };
  });
};

export interface EnhancedProject extends Project {
  areas: Area[];
}
