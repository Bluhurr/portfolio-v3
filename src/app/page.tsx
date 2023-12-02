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
        className="min-h-screen z-0 flex w-full h-full max-w-[2048px] mx-auto"
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
          <div className="mt-[17.7%] ml-[15%] mr-[2%] flex justify-center">
            <span
              id="hero-vert-line"
              className="absolute w-[6px] h-[80rem] bg-white rounded-lg"
            ></span>
            <span
              id="social-1"
              className="absolute p-4 bg-white top-[45rem] rounded-full h-[4rem] w-[4rem] flex justify-center items-center"
            >
              in
            </span>
            <span
              id="social-2"
              className="absolute p-4 bg-white top-[51rem] rounded-full h-[4rem] w-[4rem] flex justify-center items-center"
            >
              git
            </span>
            <span id="hero-horiz-line"></span>
          </div>
          <div className="flex flex-col mr-auto ml-0 mt-[17.2%]">
            <h1
              className={`${abrilFatface.variable} mb-[5%] uppercase text-white lg:leading-[6rem] md:leading-[4.5vw] text-[5vw] leading-[4.5vw] md:text-[5vw] lg:text-[7rem] font-abril`}
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
      <div className="min-h-screen"></div>
      <section id="projects" className="z-20 bottom-0">
        <div id="projects-heading-container" className="h-[20rem]">
          <h2>Projects</h2>
        </div>
        <Project title="Planning Diva" />
        <Project title="Mobilize Solutions" />
        <Project title="Scituate Podiatry" />
      </section>
      <section id="resume" className=""></section>
      <section id="about" className=""></section>
    </main>
  );
}
