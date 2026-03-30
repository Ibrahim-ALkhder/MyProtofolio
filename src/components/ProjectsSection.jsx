import { motion } from "framer-motion";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const dashboard = projects[0];
  const textArrow = projects[1];
  const diamond = projects[2];
  const camera = projects[3];
  const phone = projects[4];
  const smallLaptop = projects[5];
  const contact = projects[6];
  const empty = projects[7];

  return (
    <section
      id="projects"
      className="bg-[#050608] px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1160px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[42px] font-medium tracking-tight text-white">
            Projects
          </h2>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-[1.08fr_1fr] lg:gap-4">
          {/* Left side */}
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard project={dashboard} className="col-span-2 h-[455px]" />
            <ProjectCard project={phone} className="h-[320px]" />
            <ProjectCard project={smallLaptop} className="h-[320px]" />
          </div>

          {/* Right side */}
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard project={textArrow} className="col-span-2 h-[220px]" />
            <ProjectCard project={diamond} className="h-[320px]" />
            <ProjectCard project={camera} className="h-[320px]" />
            <ProjectCard project={contact} className="h-[92px]" />
            <ProjectCard project={empty} className="h-[92px]" />
          </div>
        </div>

        {/* Tablet / Mobile */}
        <div className="grid gap-4 lg:hidden">
          <ProjectCard project={dashboard} className="h-[420px]" />
          <ProjectCard project={textArrow} className="h-[220px]" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProjectCard project={diamond} className="h-[300px]" />
            <ProjectCard project={camera} className="h-[300px]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ProjectCard project={phone} className="h-[260px]" />
            <ProjectCard project={smallLaptop} className="h-[260px]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ProjectCard project={contact} className="h-[88px]" />
            <ProjectCard project={empty} className="h-[88px]" />
          </div>
        </div>
      </div>
    </section>
  );
}