import React from 'react'

interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  learned: string;
}

const experiences: ExperienceProps[] = [
  {
    company: "FastOne Global Markets",
    role: "Junior Front-End Developer",
    period: "September 2025 – Present",
    location: "Ahmedabad, Gujarat",
    description:
      "At FastOne Global Markets, I contribute to the development of an internal CRM platform used to streamline business operations and user management workflows. My primary focus is building scalable frontend systems that support complex business processes while maintaining a responsive and intuitive user experience.",
    responsibilities: [
      "Develop and maintain frontend modules using React.js and modern component-driven architecture.",
      "Integrate REST APIs to support dynamic data management and real-time business workflows.",
      "Design and implement dashboard interfaces for monitoring, reporting, and operational activities.",
      "Collaborate with backend developers, designers, and stakeholders to deliver user-focused solutions.",
      "Improve UI consistency, component reusability, and application maintainability across the platform.",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "Git", "Figma"],
    learned:
      "Working on a CRM system exposed me to real-world enterprise workflows, dashboard architecture, scalable frontend development practices, and cross-functional collaboration. It strengthened my understanding of how software supports business operations beyond just building user interfaces.",
  },
  {
    company: "Megnx Software",
    role: "React Developer",
    period: "February 2025 – May 2025",
    location: "Ahmedabad, Gujarat",
    description:
      "At Megnx Software, I worked on multiple client and product-oriented applications built with React.js and Next.js. My role focused on creating responsive interfaces, implementing new features, and improving existing products to provide a better user experience.",
    responsibilities: [
      "Developed responsive web applications using React.js and Next.js.",
      "Integrated RESTful APIs to support dynamic content and user interactions.",
      "Implemented new features based on business requirements and client feedback.",
      "Enhanced UI/UX across projects by improving usability and visual consistency.",
      "Optimized frontend code for maintainability and performance.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "REST APIs", "Tailwind CSS", "Git"],
    learned:
      "This role helped me strengthen my understanding of modern frontend development, API-driven applications, reusable component design, and performance optimization techniques.",
  },
  {
    company: "Skywinds Solutions",
    role: "MERN Stack Intern",
    period: "December 2023 – March 2024",
    location: "Ahmedabad, Gujarat",
    description:
      "My internship at Skywinds Solutions marked the beginning of my professional software development journey. During this period, I worked on the Mitreisen Travel Booking System while gaining practical experience across both frontend and backend development.",
    responsibilities: [
      "Developed frontend interfaces using React.js based on Figma designs.",
      "Built reusable components for travel booking workflows.",
      "Implemented dynamic routing and user-facing modules.",
      "Assisted in backend API development and database operations.",
      "Participated in system design discussions and development workflows.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Figma"],
    learned:
      "This experience provided my first exposure to full-stack development, team collaboration, version control, and real-world software engineering practices. It also laid the foundation for my understanding of scalable web applications and system architecture.",
  },
];

function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  responsibilities,
  technologies,
  learned,
}: ExperienceProps) {
  return (
    <div className="p-5 lg:p-10 lg:rounded-5xl shadow-md shadow-fcolor space-y-6 font-work">
      <div>
        <h3 className="pb-1">{company}</h3>
        <h4 className="text-fcolor">{role}</h4>
        <p className="text-lg font-light pt-2">
          {period} | {location}
        </p>
      </div>

      <p className="text-xl">{description}</p>

      <div>
        <h5 className="text-2xl font-inter font-semibold pb-3">Key Responsibilities</h5>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-2xl font-inter font-semibold pb-3">Technologies Used</h5>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-base shadow-md shadow-fcolor/30 rounded-2xl font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h5 className="text-2xl font-inter font-semibold pb-3">What I Learned</h5>
        <p className="text-xl">{learned}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="lg:p-10 space-y-10">
      <h5 className="text-4xl text-center font-inter font-semibold">Professional Experience</h5>

      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}

      <div className="p-5 lg:p-10 text-xl font-work lg:rounded-5xl shadow-md shadow-fcolor space-y-4">
        <h3 className="pb-2">Career Growth</h3>
        <p className="text-2xl font-inter font-semibold text-fcolor">
          Internship → React Developer → Junior Front-End Developer
        </p>
        <p>
          Over the course of my career, I have progressed from building individual frontend modules to
          contributing to larger-scale business systems such as CRM platforms, multi-tenant applications,
          and administrative dashboards.
        </p>
        <p>
          My focus today is not only on creating responsive user interfaces but also on understanding
          application architecture, maintainability, scalability, authentication systems, and overall
          product development workflows.
        </p>
      </div>
    </div>
  );
}
