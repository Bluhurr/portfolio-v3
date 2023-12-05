import { FC } from "react";
import { Abril_Fatface, Abel } from "next/font/google";
import Image from "next/image";

const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril",
  weight: ["400"],
});

const abel = Abel({
  subsets: ["latin"],
  variable: "--font-abel",
  weight: ["400"],
});

interface ProjectProps {
  title?: string;
  subtitle?: string;
  colorTheme?: string;
  description?: React.JSX.Element;
  skills?: string[];
  link?: string;
  screenshot?: React.JSX.Element;
}

const Project: FC<ProjectProps> = ({
  title,
  subtitle,
  colorTheme,
  description,
  skills,
  link,
  screenshot,
}) => {
  return (
    <div
      style={{
        backgroundImage:
          colorTheme &&
          `linear-gradient(162deg, ${colorTheme} 0%, rgba(0,163,255,1) 100%)`,
      }}
      className="p-[4rem] bg-white flex flex-col overflow-hidden pb-[6rem] gap-8"
    >
      <div className="flex mb-3 items-end gap-6 flex-wrap">
        <h3
          className={`${abrilFatface.variable} font-abril text-6xl text-white z-10 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]`}
        >
          {title}
        </h3>
        <h3
          className={`${abrilFatface.variable} font-abril text-3xl text-white z-20 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)]`}
        >
          {subtitle}
        </h3>
      </div>
      <div className="flex gap-4 md:flex-wrap md:flex-nowrap">
        <div className="basis-1/2 z-10">{screenshot}</div>
        <div className="relative flex flex-col basis-1/2">
          <Image
            className="w-full md:scale-[2.0] absolute lg:-mt-[5%] md:mt-[15%] -ml-[5%] lg:scale-[1.15] z-0 opacity-[0.75]"
            alt="project bg blob"
            src="/Project_Description_Blob.svg"
            width={200}
            height={200}
          />
          <div
            className={`${abel.variable} font-abel tracking-wide basis-1/2 lg:w-[90%] md:w-[100%] p-10 lg:text-2xl md:text-md sm:text-md text-white z-10`}
          >
            {description}
          </div>
          <div className="flex justify-end">
            <a className="p-5 ml-auto mr-4" href={link}></a>
          </div>
        </div>
      </div>
      <ul className="flex gap-4">
        {skills &&
          skills.map((skill, index) => (
            <li
              className={`${abel.variable} shadow-flat-sm font-abel px-6 py-4 rounded-xl bg-black bg-opacity-50 text-white text-lg tracking-wide`}
              key={index}
            >
              {skill}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Project;
