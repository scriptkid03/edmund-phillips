"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className='relative max-w-5xl mx-auto px-6 py-16 space-y-16'>
      {/* Hero */}
      <section className='text-center space-y-4'>
        <h1 className='text-4xl font-bold'>Edmund Kwame Odame Phillips</h1>
        <p className='text-lg text-muted-foreground'>
          Frontend Developer | Mobile Developer | Lifelong Learner
        </p>
        <div className='flex items-center justify-center gap-4 pt-4'>
          <Button asChild>
            <Link href='/resume.pdf'>Download Resume</Link>
          </Button>
          <Link
            href='https://www.linkedin.com/in/your-link'
            className='text-[--apple-blue] hover:text-[--apple-blue-hover] transition-colors'
          >
            View LinkedIn →
          </Link>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className='text-2xl font-semibold mb-6'>Education</h2>
        <Card className='glass border border-[--glass-border]'>
          <CardContent className='p-6 space-y-2'>
            <h3 className='font-medium'>
              B.Sc. Computer Science – Academic City University
            </h3>
            <p className='text-sm text-muted-foreground'>
              Jan 2022 – Jun 2025, Accra, Ghana
            </p>
            <p className='text-sm'>
              Relevant Coursework: Computer Systems Programming, Web
              Technologies, Cloud Computing, Human Computer Interaction.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section>
        <h2 className='text-2xl font-semibold mb-6'>Skills</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <Card className='glass border border-[--glass-border]'>
            <CardContent className='p-6 space-y-3'>
              <h3 className='font-medium'>Technical Skills</h3>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Next.js",
                  "Angular",
                  "React Native",
                  "Tailwind CSS",
                  "TypeScript",
                  "MongoDB",
                  "Python",
                  "Git",
                  "Figma",
                ].map((skill) => (
                  <Badge key={skill} variant='secondary'>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className='glass border border-[--glass-border]'>
            <CardContent className='p-6 space-y-3'>
              <h3 className='font-medium'>Soft Skills & Languages</h3>
              <p>Problem Solving, Communication, Leadership, Time Management</p>
              <div className='flex gap-2 flex-wrap'>
                <Badge>English</Badge>
                <Badge>French</Badge>
                <Badge>Twi</Badge>
                <Badge>Fante</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className='text-2xl font-semibold mb-6'>Experience</h2>
        <div className='grid gap-6'>
          {[
            {
              role: "SWE Intern – Stanbic Bank Ghana",
              date: "Jun 2024 – Jul 2024",
              desc: [
                "Built responsive Angular apps with TypeScript.",
                "Translated Figma mockups into functional UIs.",
                "Explored backend concepts with Spring Boot APIs.",
              ],
            },
            {
              role: "SWE Intern – Stanbic Bank Ghana",
              date: "Jun 2023 – Jul 2023",
              desc: [
                "Led requirements gathering with stakeholders.",
                "Collaborated with designers for UI/UX improvements.",
                "Focused on frontend coding (Angular + TypeScript).",
              ],
            },
          ].map((job) => (
            <Card
              key={job.date}
              className='glass border border-[--glass-border]'
            >
              <CardContent className='p-6 space-y-2'>
                <h3 className='font-medium'>{job.role}</h3>
                <p className='text-sm text-muted-foreground'>{job.date}</p>
                <ul className='list-disc list-inside text-sm'>
                  {job.desc.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Interests */}
      <section>
        <h2 className='text-2xl font-semibold mb-6'>Other Interests</h2>
        <div className='flex gap-3 flex-wrap'>
          {[
            "💻 Web Dev",
            "🤖 AI",
            "📚 Learning",
            "💪 Fitness",
            "🏎️ Motorsports",
          ].map((interest) => (
            <Badge
              key={interest}
              className='rounded-full bg-[--glass] border border-[--glass-border]'
            >
              {interest}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
