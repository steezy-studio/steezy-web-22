import {
  Area as BaseArea,
  Areas as BaseAreas,
  FeaturedGrid as BaseFeaturedGrid,
  Project as BaseProject,
  Projects as BaseProjects,
  Query as BaseQuery,
} from "./generated/preprTypes";

export type Project = {
  grid_image_portrait: BaseProject["grid_image"];
} & BaseProject;

export type Projects = Omit<BaseProjects, "items"> & {
  items: Project[];
};

export type Area = Omit<BaseArea, "projects"> & {
  projects: Project[];
};

export type Areas = Omit<BaseAreas, "items"> & {
  items: Area[];
};

export type FeturedGrid = Omit<BaseFeaturedGrid, "featured_projects"> & {
  featured_projects: Project[];
};

export type Query = Omit<
  BaseQuery,
  "Projects" | "Project" | "Similar_Projects" | "Area" | "Areas"
> & {
  Area: Area;
  Areas: Areas;
  Projects: Projects;
  Project: Project;
  Similar_Projects: Projects;
  FeaturedGrid: FeturedGrid;
};
