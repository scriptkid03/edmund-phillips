import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce frontend with responsive design and seamless user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "/projects/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task manager with team workspaces and notifications.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "/projects/task-manager",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard for tracking business metrics and KPIs.",
      tech: ["Next.js", "Recharts", "PostgreSQL", "TailwindCSS"],
      link: "/projects/analytics",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "React Native",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
  ];

  return (
    <div className='container mx-auto px-4 py-16 max-md:py-8 max-w-6xl'>
      <section className='mb-24'>
        <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl'>
          <h1 className='text-3xl md:text-6xl font-semibold mb-6 tracking-tight'>
            Hi, I'm Edmund Phillips
          </h1>
          <p className='text-md md:text-xl text-foreground/70 mb-8 max-w-2xl leading-relaxed'>
            Frontend Web Developer crafting elegant user interfaces and
            experiences. Passionate about building responsive, modern web
            applications that make a difference.
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button asChild size='lg' className='rounded-full shadow-lg'>
              <Link href='/projects'>
                View My Work <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='rounded-full border-foreground/20 hover:bg-foreground/5 backdrop-blur-sm'
            >
              <Link href='/resume'>Resume</Link>
            </Button>
          </div>
          <div className='flex gap-3 mt-8'>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full hover:bg-foreground/10 backdrop-blur-sm'
              asChild
            >
              <Link
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <Github className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full hover:bg-foreground/10 backdrop-blur-sm'
              asChild
            >
              <Link
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full hover:bg-foreground/10 backdrop-blur-sm'
              asChild
            >
              <Link href='mailto:your.email@example.com' aria-label='Email'>
                <Mail className='h-5 w-5' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className='mb-24'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-2xl md:text-4xl font-semibold tracking-tight'>
            Featured Projects
          </h2>
          <Button
            variant='ghost'
            className='rounded-full hover:bg-foreground/5'
            asChild
          >
            <Link
              href='/projects'
              className='text-apple-blue hover:text-apple-blue-hover'
            >
              View All <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className='group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300'
            >
              <h3 className='text-xl font-semibold mb-3'>{project.title}</h3>
              <p className='text-foreground/70 mb-6 text-md leading-relaxed'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className='px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/10'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className='inline-flex items-center text-sm font-medium text-apple-blue hover:text-apple-blue-hover transition-colors'
              >
                Learn More <ArrowRight className='ml-1 h-3 w-3' />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='mb-24'>
        <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-xl'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-8 tracking-tight'>
            About Me
          </h2>
          <div className='max-w-3xl'>
            <p className='text-md md:text-lg text-foreground/70 mb-4 leading-relaxed'>
              I'm a developer with a passion for creating seamless web
              experiences. With expertise in modern JavaScript frameworks and a
              keen eye for design, I build applications that are both functional
              and beautiful.
            </p>
            <p className='text-lg text-foreground/70 mb-8 leading-relaxed'>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or sharing what I've learned with the
              community.
            </p>
            <Button
              variant='outline'
              className='rounded-full border-foreground/20 hover:bg-foreground/5'
              asChild
            >
              <Link href='/about'>More About Me</Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-3xl md:text-4xl font-semibold mb-10 tracking-tight'>
          Skills & Technologies
        </h2>
        <div className='flex flex-wrap gap-3'>
          {skills.map((skill) => (
            <span
              key={skill}
              className='px-5 py-2.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
