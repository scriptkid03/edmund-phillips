"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Vony Events & Rentals",
    role: "Frontend Developer (Freelance)",
    desc: "Responsive platform for event & décor rentals tailored for the Ghanaian market. Features cart-based estimates, Cloudinary-powered PDF invoices, and a modern UI.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudinary"],
    github: "https://github.com/your-link",
    live: "https://your-link.com",
  },
  {
    title: "Prime-Flow CMS (Capstone Project)",
    role: "Mobile Developer",
    desc: "Enterprise-grade multi-tenant CMS mobile app. Built with React Native (Expo), Auth0 authentication, real-time updates via Socket.IO, and NestJS backend integration.",
    tech: ["React Native", "Expo", "NestJS", "Prisma", "Socket.IO"],
    github: "https://github.com/your-link",
    live: "https://your-link.com",
  },
  {
    title: "Stanbic Bank Ghana (Internship)",
    role: "Software Engineering Intern",
    desc: "Contributed to responsive Angular applications. Translated Figma mockups into UI components and explored backend integration with Spring Boot APIs.",
    tech: ["Angular", "TypeScript", "Spring Boot", "Figma"],
    github: "",
    live: "",
  },
];

export default function ProjectsPage() {
  return (
    <div className='relative max-w-5xl mx-auto px-6 py-16 space-y-16'>
      {/* Hero */}
      <section className='text-center space-y-3'>
        <h1 className='text-4xl font-bold'>Projects</h1>
        <p className='text-lg text-muted-foreground'>
          A selection of my work across web, mobile, and freelance projects.
        </p>
      </section>

      {/* Projects Grid */}
      <section className='grid md:grid-cols-2 gap-8'>
        {projects.map((proj) => (
          <Card
            key={proj.title}
            className='glass border border-[--glass-border] hover:shadow-lg transition-all hover:-translate-y-1'
          >
            <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
              <p className='text-sm text-muted-foreground'>{proj.role}</p>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='text-sm'>{proj.desc}</p>
              <div className='flex flex-wrap gap-2'>
                {proj.tech.map((t) => (
                  <Badge key={t} variant='secondary'>
                    {t}
                  </Badge>
                ))}
              </div>
              <div className='flex gap-3 pt-2'>
                {proj.live && (
                  <Button asChild variant='default' size='sm'>
                    <Link href={proj.live} target='_blank'>
                      View Live
                    </Link>
                  </Button>
                )}
                {proj.github && (
                  <Button asChild variant='outline' size='sm'>
                    <Link href={proj.github} target='_blank'>
                      GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
