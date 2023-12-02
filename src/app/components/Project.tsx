import { FC } from "react";

interface ProjectProps {
  title: string;
}

const Project: FC<ProjectProps> = ({ title }) => {
  return (
    <div className="h-40 bg-white">
      <h3>{title}</h3>
    </div>
  );
};

export default Project;
