"use client";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import equinax from "@/assets/images/equinax.jpg";
import value2Investments from "@/assets/images/value2investments.jpg";
import Image from "next/image";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    category: "SaaS",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://siyamurrahmanmeraj.netlify.com",
    image: darkSaasLandingPage,
  },
  {
    company: "Equinax",
    year: "2024",
    category: "Consultancy",
    title: "Project management consultancy",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://equinoxbali.com/",
    image: equinax,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    category: "AI",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "Value2Investments",
    year: "2023",
    category: "Finance",
    title: "Investment Landing Page",
    results: [
      { title: "Enhanced user experience by 80%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 65%" },
    ],
    link: "https://www.value2investments.com",
    image: value2Investments,
  },
];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive unique categories for filter buttons
  const categories = [
    "All",
    ...new Set(portfolioProjects.map((project) => project.category)),
  ];

  // Filter projects based on active category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      className="pb-16 lg:py-24"
      id="projects"
    >
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 my-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {filteredProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className={
                "px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky"
              }
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold gap-2 uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 px-6">
                      <span> Visit Live Site </span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
