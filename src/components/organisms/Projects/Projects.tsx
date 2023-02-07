import AnimateIntoView from "@animations/AnimateIntoView/AnimateIntoView";
import ProjectCard from "@atoms/ProjectCard/ProjectCard";

import SectionTitle from "@atoms/SectionTitle/SectionTitle";
import { IProject } from "@models/Project";
import Link from "next/link";
import { Cards, Wrapper } from "./Projects.styles";

const Projects = ({ projects }: { projects: IProject[] }) => (
  <Wrapper>
    <SectionTitle title="Featured Work" />
    <AnimateIntoView>
      <Cards>
        {projects.map((project: IProject) => (
          <Link href={`/project/${project?.id}`}>
            <ProjectCard key={project.id} {...project} />
          </Link>
        ))}
      </Cards>
    </AnimateIntoView>
  </Wrapper>
);

export default Projects;
