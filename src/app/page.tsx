import Project from "./components/Project";
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

export default function Home() {
  return (
    <main className="bg-gradient-my-blue flex flex-col w-full h-full min-h-screen">
      <section
        id="hero"
        className="min-h-screen z-0 flex w-full h-[110rem] max-w-[2048px] mx-auto"
      >
        <Image
          alt="background-blob"
          width="100"
          height="100"
          src="/blob1.svg"
          className="absolute -top-20 -left-[5rem] max-w-[2048px] right-0 z-0 w-[93%] mx-auto"
        />
        <div
          id="landing-page-main-heading"
          className="z-10 relative flex w-full justify-center"
        >
          <div className="mt-[17.7%] left-[17%] flex justify-center absolute">
            <span
              id="hero-vert-line"
              className="absolute w-[6px] h-[80rem] bg-white rounded-lg"
            ></span>
            <span
              id="social-1"
              className="absolute p-4 bg-white top-[20rem] rounded-full h-[4rem] w-[4rem] flex justify-center items-center"
            >
              in
            </span>
            <span
              id="social-2"
              className="absolute p-4 bg-white top-[26rem] rounded-full h-[4rem] w-[4rem] flex justify-center items-center"
            >
              git
            </span>
            <span
              id="hero-horiz-line"
              className="absolute h-[6px] w-[9.5rem] bg-white top-[79.6rem] rounded-full translate-x-[50%]"
            ></span>
            <div
              id="projects-heading-container"
              className={`absolute top-[80rem] translate-x-[55%] -translate-y-[108%] ${abrilFatface.variable} font-abril text-white text-8xl`}
            >
              <h2 className="drop-shadow-[7px_7px_2px_rgba(0,0,0,0.3)]">
                Work Projects
              </h2>
            </div>
          </div>
          <div className="flex flex-col mr-auto ml-[19%] mt-[17.2%]">
            <h1
              className={`${abrilFatface.variable} drop-shadow-[9px_9px_8px_rgba(0,0,0,0.15)] mb-[5%] uppercase text-white lg:leading-[6rem] md:leading-[4.5vw] text-[5vw] leading-[4.5vw] md:text-[5vw] lg:text-[7rem] font-abril`}
            >
              Greg
              <br />
              Lawrence
            </h1>
            <h2
              className={`${abel.variable} font-abel text-right text-white lg:leading-[1rem] lg:text-[2.5rem] leading-[1vw] text-[2vw] mt-0`}
            >
              Creative Fullstack Developer
            </h2>
          </div>
        </div>
        <div id="r3f-container"></div>
      </section>
      <section id="projects" className="z-20 bottom-0 max-w-[2048px] mx-auto">
        <Project
          title="Planning Diva"
          subtitle="3D Venue Editor"
          link="https://planningdiva.com/"
          skills={[
            "React",
            "React Three Fiber",
            "Typescript",
            "Git",
            "TailwindCSS",
            "REST",
          ]}
          colorTheme="#E481C3"
          description={
            <>
              <p>
                Developed a dynamic blog platform with a custom Content
                Management System (CMS). Implemented features such as user
                authentication, post creation/editing, and comment
                functionality. Used Node.js and MongoDB for backend, ensuring
                scalability and robust data management.
                <br />
                <br />
                Developed a dynamic blog platform with a custom Content
                Management System (CMS).
              </p>
            </>
          }
          screenshot={
            <Image
              className="w-full shadow-flat"
              alt="Planning Diva Web App Screenshot"
              src="/diva_screenshot_1.png"
              width={1080}
              height={1080}
            />
          }
        />
        <Project
          title="Mobilize Solutions"
          subtitle="Winter Experiences Hub"
          link="placeholder"
          skills={[
            "8th Wall",
            "JavaScript",
            "HTML",
            "CSS",
            "Three.js",
            "A-Frame",
          ]}
          colorTheme="#F0C736"
          description={
            <>
              <p>
                Developed a dynamic blog platform with a custom Content
                Management System (CMS). Implemented features such as user
                authentication, post creation/editing, and comment
                functionality. Used Node.js and MongoDB for backend, ensuring
                scalability and robust data management.
                <br />
                <br />
                Developed a dynamic blog platform with a custom Content
                Management System (CMS).
              </p>
            </>
          }
          screenshot={
            <Image
              className="w-full shadow-flat"
              alt="Mobilize Screenshot"
              src="/MobilizeSolutions_Screenshot.jpg"
              width={1080}
              height={1080}
            />
          }
        />
        <Project
          title="Scituate Podiatry"
          subtitle="Custom Wordpress Website"
          link="https://scituatepodiatry.com/"
          skills={["Wordpress", "HTML", "CSS"]}
          colorTheme="#00318F"
          description={
            <>
              <p>
                Developed a dynamic blog platform with a custom Content
                Management System (CMS). Implemented features such as user
                authentication, post creation/editing, and comment
                functionality. Used Node.js and MongoDB for backend, ensuring
                scalability and robust data management.
                <br />
                <br />
                Developed a dynamic blog platform with a custom Content
                Management System (CMS).
              </p>
            </>
          }
          screenshot={
            <Image
              className="w-full shadow-flat"
              alt="Mobilize Screenshot"
              src="/ScituatePodiatry_Screenshot.jpg"
              width={1080}
              height={1080}
            />
          }
        />
      </section>
      <section id="resume" className="max-w-[2048px]"></section>
      <section id="about" className="max-w-[2048px]"></section>
    </main>
  );
}
