import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  ExternalLink,
  Github,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "vony-events",
      title: "Vony Events and Rentals",
      subtitle: "Event & Décor Rental Website",
      description:
        "A responsive event rental platform tailored for the Ghanaian market. Features booking inquiries, cart-based estimates, and PDF invoice generation with Cloudinary integration.",
      // image: "/projects/vony-events.jpg",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudinary", "TypeScript"],
      category: "Freelance",
      status: "Ongoing",
      date: "Aug 2025 - Present",
      role: "Frontend Developer",
      features: [
        "Responsive event rental platform",
        "Booking inquiry system",
        "Cart-based estimate calculator",
        "PDF invoice generation",
        "Cloudinary image integration",
        "Modern UI aligned with company branding",
      ],
      links: {
        live: "https://vony-rentals.vercel.app",
        github: null,
      },
    },
    {
      id: "capstone-project",
      title: "PrimeFlow CMS",
      subtitle: "Final Year Capstone Project",
      description:
        "A comprehensive mobile application developed as part of Academic City University's capstone project. Built with React Native and integrated with a NestJS backend.",
      // image: "/projects/capstone.jpg",
      tech: [
        "React Native",
        "Expo SDK 53",
        "TypeScript",
        "Auth0",
        "NestJS",
        "Prisma",
        "Socket.IO",
        "React Query",
      ],
      category: "Academic",
      status: "Completed",
      date: "Sept 2024 - May 2025",
      role: "Mobile Developer",
      features: [
        "Built with React Native (Expo SDK 53) and TypeScript",
        "Expo Router v5 for navigation with dark/light mode support",
        "Auth0 authentication with JWT and SecureStore",
        "Connected to NestJS + Prisma backend",
        "Optimized data fetching with Axios, React Query v5, and SWR",
        "Real-time updates via Socket.IO",
        "Enhanced UX with Reanimated and Expo Image",
        "Collaborative team project (Frontend, Backend, Security, Mobile)",
      ],
      links: {
        live: "https://app-link.com",
        github: null,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <section className="mb-24">
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              Projects
            </h1>
            <p className="text-md md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
              A collection of my work ranging from freelance projects to
              academic endeavors. Each project represents my commitment to
              building functional, user-centric applications using modern
              technologies.
            </p>
          </div>
        </section>
        <section className="mb-16">
          <div className="space-y-16">
            {projects.map((project, idx) => (
              <article
                key={project.id}
                className="backdrop-blur-xl bg-glass border border-glass-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-96 bg-gradient-to-br from-foreground/5 to-foreground/10 overflow-hidden">
                  {project.links.live ? (
                    <LinkPreview
                      url={project.links.live}
                      width={1200}
                      height={800}
                      className="absolute inset-0 w-full h-full rounded-none border-0 shadow-none"
                      alt={`${project.title} website preview`}
                      fallbackContent={
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-foreground/10 flex items-center justify-center">
                            {project.category === "Freelance" ? (
                              <Briefcase className="h-12 w-12 text-apple-blue" />
                            ) : (
                              <GraduationCap className="h-12 w-12 text-apple-blue" />
                            )}
                          </div>
                          <p className="text-sm text-foreground/50">
                            {project.title}
                          </p>
                        </div>
                      }
                    />
                  ) : (
                    // Fallback for projects without live links
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-foreground/10 flex items-center justify-center">
                          {project.category === "Freelance" ? (
                            <Briefcase className="h-12 w-12 text-apple-blue" />
                          ) : (
                            <GraduationCap className="h-12 w-12 text-apple-blue" />
                          )}
                        </div>
                        <p className="text-sm text-foreground/50">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-6 right-6">
                    <Badge
                      variant={
                        project.status === "Ongoing" ? "default" : "secondary"
                      }
                      className="rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-xl bg-glass border border-glass-border shadow-lg"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="rounded-full">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-foreground/60 flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 tracking-tight">
                        {project.title}
                      </h2>
                      <p className="text-md md:text-lg text-apple-blue font-medium">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">
                        Role: {project.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-md md:text-lg text-foreground/70 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-foreground/70">
                          <span className="text-apple-blue mt-1">●</span>
                          <span className="max-md:text-md">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full px-4 py-2"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.links.live && (
                      <Button
                        asChild
                        size="lg"
                        className="rounded-full shadow-lg"
                      >
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="rounded-full border-foreground/20 hover:bg-foreground/5"
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section>
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
              More Projects Coming Soon
            </h2>
            <p className="text-md md:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring innovative
              solutions. Check back soon for more updates!
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-foreground/20 hover:bg-foreground/5"
            >
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
