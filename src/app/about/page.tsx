import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Code2,
  Globe,
  Zap,
} from "lucide-react";
import EducationSection from "@/components/education";

export default function About() {
  const technicalSkills = [
    "Next.js",
    "Angular",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "TypeScript",
    "MongoDB",
    "Python",
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

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      logo: "/img/stanbic.jpg",
      period: "Jun. 2024 – Jul. 2024",
      location: "Accra, Ghana",
      achievements: [
        "Developed and maintained responsive web applications using Angular, HTML, CSS, JavaScript, and TypeScript.",
        "Worked closely with designers to translate mockups and prototypes into functional and visually appealing user interfaces.",
        "Began exploring backend development concepts using Spring Boot, gaining foundational knowledge in API creation and integration.",
        "Collaborated with backend teams to align frontend features with backend functionality, ensuring seamless integration and performance.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      logo: "/img/stanbic.jpg",
      period: "Jun. 2023 – Jul. 2023",
      location: "Accra, Ghana",
      achievements: [
        "Led requirements gathering, conducted stakeholder interviews, and analyzed business processes for process improvement identification.",
        "Actively contributed to the design phase by collaborating with UI/UX designers to create intuitive and user-friendly interfaces.",
        "Assumed key responsibilities in the development phase, focusing on frontend coding using Angular, HTML, CSS, JavaScript, and TypeScript.",
        "Engaged in a full-stack approach, ensuring seamless coordination between requirements, design, and development stages for optimal project outcomes.",
      ],
    },
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
        {/* Hero Section */}
        <section className='mb-24'>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl'>
            <h1 className='text-5xl md:text-6xl font-semibold mb-6 tracking-tight'>
              About Me
            </h1>
            <p className='text-xl text-foreground/70 mb-6 leading-relaxed'>
              I'm Edmund Kwame Odame Phillips, a passionate Full-Stack Developer
              based in Accra, Ghana. Currently pursuing my B.Sc. in Computer
              Science at Academic City University, I specialize in building
              modern web and mobile applications that solve real-world problems.
            </p>
            <p className='text-xl text-foreground/70 leading-relaxed'>
              With hands-on experience at Stanbic Bank Ghana and multiple
              projects under my belt, I bring a unique blend of technical
              expertise and creative problem-solving to every project I work on.
            </p>
          </div>
        </section>

        {/* Education */}
        {/* <section className='mb-24'>
          <div className='flex items-center gap-3 mb-10'>
            <GraduationCap className='h-8 w-8 text-apple-blue' />
            <h2 className='text-4xl font-semibold tracking-tight'>Education</h2>
          </div>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl'>
            <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-4'>
              <div className='flex items-start gap-4'>
                <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                  <Image
                    src='/img/acity.png'
                    alt='Academic City University'
                    width={64}
                    height={64}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>
                    Academic City University
                  </h3>
                  <p className='text-lg text-foreground/70'>
                    B.Sc. Computer Science
                  </p>
                </div>
              </div>
              <div className='text-foreground/70 md:text-right'>
                <p>Jan. 2022 - Jun. 2025</p>
                <p>Accra, Ghana</p>
              </div>
            </div>
            <div className='mt-6'>
              <p className='text-sm font-medium text-foreground/60 mb-3'>
                RELEVANT COURSEWORK
              </p>
              <div className='flex flex-wrap gap-2'>
                {[
                  "Computer Systems Programming",
                  "Software Engineering",
                  "Project Management",
                  "Engineering and Risk Analysis",
                  "Web Technologies",
                  "Human Computer Interaction",
                  "Cloud Computing",
                ].map((course) => (
                  <Badge
                    key={course}
                    variant='secondary'
                    className='rounded-full'
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section> */}
        <EducationSection />

        {/* Work Experience */}
        <section className='mb-24'>
          <div className='flex items-center gap-3 mb-10'>
            <Briefcase className='h-8 w-8 text-apple-blue' />
            <h2 className='text-4xl font-semibold tracking-tight'>
              Work Experience
            </h2>
          </div>
          <div className='space-y-6'>
            {experience.map((job, idx) => (
              <div
                key={idx}
                className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={64}
                        height={64}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div>
                      <h3 className='text-2xl font-semibold mb-2'>
                        {job.title}
                      </h3>
                      <p className='text-lg text-apple-blue font-medium'>
                        {job.company}
                      </p>
                    </div>
                  </div>
                  <div className='text-foreground/70 md:text-right'>
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className='space-y-3'>
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className='flex gap-3 text-foreground/70 leading-relaxed'
                    >
                      <span className='text-apple-blue mt-1.5'>●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className='mb-24'>
          <div className='flex items-center gap-3 mb-10'>
            <Code2 className='h-8 w-8 text-apple-blue' />
            <h2 className='text-4xl font-semibold tracking-tight'>Skills</h2>
          </div>

          {/* Technical Skills */}
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

          {/* Soft Skills */}
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

          {/* Languages */}
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

        {/* Interests */}
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

        {/* CTA Section */}
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
