import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  return allProjects
    .filter((project) => project.published)
    .map((project) => ({
      slug: project.slug,
    }));
}

const ProjectPage = async (props: Props) => {
  const { slug } = await props.params;

  const project = allProjects.find((project) => project.slug === slug);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <>
      <h1>{project.title}</h1>
      <MDXContent code={project.mdx} />
    </>
  )
};

export default ProjectPage;

