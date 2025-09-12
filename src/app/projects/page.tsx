import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Hospital Appointment System",
    description: "Patients book appointments, staff upload lab results.",
    tech: ["Next.js", "MongoDB", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Event & Décor Rental Website",
    description: "Event booking platform tailored for Ghana’s market.",
    tech: ["Next.js", "Cloudinary", "Prisma"],
    demo: "#",
    github: "#",
  },
  {
    title: "Campus Event Hub",
    description: "Angular + Prisma app for managing campus events.",
    tech: ["Angular", "Prisma", "MongoDB"],
    demo: "#",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className='max-w-6xl mx-auto p-6 lg:mt-32'>
      <h1 className='text-3xl font-bold mb-8'>Projects</h1>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <Card key={i} className='hover:shadow-lg transition-shadow'>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className='space-y-3'>
              <p className='text-sm text-muted-foreground'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.tech.map((t, j) => (
                  <Badge key={j} variant='secondary'>
                    {t}
                  </Badge>
                ))}
              </div>
              <div className='flex gap-4 text-sm'>
                <a
                  href={project.demo}
                  className='text-blue-600 hover:underline'
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className='text-blue-600 hover:underline'
                >
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
