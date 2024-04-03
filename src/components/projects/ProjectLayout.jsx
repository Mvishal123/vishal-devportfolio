import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className=" text-sm w-full md:text-base relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <h2 className="text-foreground mt-2">{name}</h2>

      <p className="text-muted hidden sm:inline-block">{description}</p>
    </ProjectLink>
  );
};

export default ProjectLayout;
