import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";
import { EducationSectionShort } from "@/components/education";
import { ExperienceSectionShort } from "@/components/experience";

export default function About() {
  const technicalSkills = [
    "Next.js",
    "React",
    "Angular",
    "React Native",
    "Expo",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
    "Figma",
  ];

  const softSkills = [
    "Problem Solving",
    "Written Communication",
    "Verbal Communication",
    "Leadership",
    "Time Management",
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Elementary" },
    { name: "Twi", level: "Fluent" },
    { name: "Fante", level: "Fluent" },
  ];

  const interests = [
    "Web Development",
    "Artificial Intelligence",
    "Continuous Learning",
    "Fitness & Wellness",
    "Motorsports",
  ];

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-16 max-w-6xl'>
        <section className='mb-24'>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl'>
            <h1 className='text-5xl md:text-6xl font-semibold mb-6 tracking-tight'>
              About Me
            </h1>
            <p className='text-xl text-foreground/70 mb-6 leading-relaxed'>
              I'm Edmund Kwame Odame Phillips, a passionate Frontend Web
              Developer based in Accra, Ghana. Recent B.Sc. Computer Science
              graduate from Academic City University, I specialize in building
              modern web and mobile applications that solve real-world problems.
            </p>
            <p className='text-xl text-foreground/70 leading-relaxed'>
              With hands-on experience at Stanbic Bank Ghana and multiple
              projects under my belt, I bring a unique blend of technical
              expertise and creative problem-solving to every project I work on.
            </p>
          </div>
        </section>

        <EducationSectionShort />

        <ExperienceSectionShort />

        <section className='mb-24'>
          <div className='flex items-center gap-3 mb-10'>
            <Code2 className='h-8 w-8 text-apple-blue' />
            <h2 className='text-4xl font-semibold tracking-tight'>Skills</h2>
          </div>

          <div className='mb-8'>
            <h3 className='text-xl font-semibold mb-4 text-foreground/80'>
              Technical Skills
            </h3>
            <div className='flex flex-wrap gap-3'>
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className='px-5 py-2.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-xl font-semibold mb-4 text-foreground/80'>
              Soft Skills
            </h3>
            <div className='flex flex-wrap gap-3'>
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className='px-5 py-2.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4 text-foreground/80'>
              Languages
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-4 shadow-lg text-center'
                >
                  <p className='font-semibold mb-1'>{lang.name}</p>
                  <p className='text-sm text-foreground/60'>{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mb-24'>
          <div className='flex items-center gap-3 mb-10'>
            <Zap className='h-8 w-8 text-apple-blue' />
            <h2 className='text-4xl font-semibold tracking-tight'>
              Other Interests
            </h2>
          </div>
          <div className='flex flex-wrap gap-3'>
            {interests.map((interest) => (
              <span
                key={interest}
                className='px-5 py-2.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200'
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl text-center'>
            <h2 className='text-3xl font-semibold mb-4 tracking-tight'>
              Let's Work Together
            </h2>
            <p className='text-lg text-foreground/70 mb-8 max-w-2xl mx-auto'>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button asChild size='lg' className='rounded-full shadow-lg'>
                <Link href='/projects'>
                  View My Work <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='rounded-full border-foreground/20 hover:bg-foreground/5'
              >
                <Link href='mailto:edmundkophillips@gmail.com'>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
