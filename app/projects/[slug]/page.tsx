import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async (props: Props) => {
  const { slug } = await props.params;

  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
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

