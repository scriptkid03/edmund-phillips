import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Calendar,
} from "lucide-react";

export default function Resume() {
  const personalInfo = {
    name: "Edmund Kwame Odame Phillips",
    title: "Full-Stack Developer",
    email: "edmundkophillips@gmail.com",
    phone: "+233 XX XXX XXXX", // Replace with actual phone
    location: "Accra, Ghana",
    website: "edmundphillips.dev", // Replace with actual website
    github: "scriptkid03", // Replace with actual GitHub username
    linkedin: "edmund-phillips", // Replace with actual LinkedIn username
  };

  const education = [
    {
      institution: "Academic City University",
      degree: "B.Sc. Computer Science",
      period: "Jan. 2022 - Jun. 2025",
      location: "Accra, Ghana",
      logo: "/img/acity.png",
      coursework: [
        "Computer Systems Programming",
        "Software Engineering",
        "Project Management",
        "Web Technologies",
        "Human Computer Interaction",
        "Cloud Computing",
      ],
    },
    {
      institution: "Aggrey Memorial A.M.E Zion SHS",
      degree: "General Science",
      period: "Jan. 2022 - Jun. 2025",
      location: "Cape Coast, Ghana",
      logo: "/img/aggrey.jpg",
      coursework: [
        "Elective ICT",
        "Elective Mathematics",
        "Physics",
        "Chemistry",
      ],
    },
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      period: "Jun. 2024 – Jul. 2024",
      location: "Accra, Ghana",
      achievements: [
        "Developed and maintained responsive web applications using Angular, HTML, CSS, JavaScript, and TypeScript",
        "Collaborated with designers to translate mockups and prototypes into functional user interfaces",
        "Explored backend development concepts using Spring Boot, gaining foundational knowledge in API creation",
        "Worked with backend teams to ensure seamless integration between frontend and backend functionality",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      period: "Jun. 2023 – Jul. 2023",
      location: "Accra, Ghana",
      achievements: [
        "Led requirements gathering and conducted stakeholder interviews for process improvement identification",
        "Collaborated with UI/UX designers to create intuitive and user-friendly interfaces",
        "Focused on frontend development using Angular, HTML, CSS, JavaScript, and TypeScript",
        "Ensured seamless coordination between requirements, design, and development stages",
      ],
    },
  ];

  const technicalSkills = {
    "Frontend Development": [
      "Next.js",
      "Angular",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "TypeScript",
    ],
    "Backend & Database": [
      "MongoDB",
      "Python",
      "Spring Boot",
      "API Development",
    ],
    "Tools & Others": ["Git & GitHub", "Figma", "VS Code", "Responsive Design"],
  };

  const softSkills = [
    "Problem Solving",
    "Written Communication",
    "Verbal Communication",
    "Leadership",
    "Time Management",
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Twi", level: "Fluent" },
    { name: "Fante", level: "Fluent" },
    { name: "French", level: "Elementary" },
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
      <div className='container mx-auto px-4 py-16 max-w-5xl'>
        {/* Header with Download */}
        <section className='mb-16'>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-8 shadow-2xl'>
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8'>
              <div className='flex-1'>
                <h1 className='text-4xl md:text-5xl font-semibold mb-4 tracking-tight'>
                  {personalInfo.name}
                </h1>
                <p className='text-2xl text-apple-blue font-medium mb-6'>
                  {personalInfo.title}
                </p>
                <p className='text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed'>
                  Passionate Full-Stack Developer specializing in modern web and
                  mobile applications. Currently pursuing B.Sc. in Computer
                  Science with hands-on experience in frontend and backend
                  development.
                </p>

                {/* Contact Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/70'>
                  <div className='flex items-center gap-3'>
                    <Mail className='h-5 w-5 text-apple-blue' />
                    <span className='text-sm'>{personalInfo.email}</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Phone className='h-5 w-5 text-apple-blue' />
                    <span className='text-sm'>{personalInfo.phone}</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <MapPin className='h-5 w-5 text-apple-blue' />
                    <span className='text-sm'>{personalInfo.location}</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Globe className='h-5 w-5 text-apple-blue' />
                    <span className='text-sm'>{personalInfo.website}</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                <Button
                  size='lg'
                  className='rounded-full shadow-lg w-full lg:w-auto'
                >
                  <Download className='mr-2 h-5 w-5' />
                  Download PDF
                </Button>
                <div className='flex gap-3 justify-center lg:justify-start'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                  >
                    <Github className='h-5 w-5' />
                  </Button>
                  <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                  >
                    <Linkedin className='h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <GraduationCap className='h-8 w-8 text-apple-blue' />
            <h2 className='text-3xl font-semibold tracking-tight'>Education</h2>
          </div>
          <div className='space-y-6'>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                      <Image
                        src={edu.logo}
                        alt='Academic City University'
                        width={64}
                        height={64}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold mb-1'>
                        {edu.institution}
                      </h3>
                      <p className='text-lg text-foreground/70 mb-1'>
                        {edu.degree}
                      </p>
                      <p className='text-foreground/60'>{edu.location}</p>
                    </div>
                  </div>
                  <div className='text-foreground/70 md:text-right'>
                    <p className='font-medium'>{edu.period}</p>
                  </div>
                </div>
                <div>
                  <p className='text-sm font-medium text-foreground/60 mb-3'>
                    RELEVANT COURSEWORK
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {edu.coursework.map((course) => (
                      <Badge
                        key={course}
                        variant='secondary'
                        className='rounded-full text-xs'
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <Briefcase className='h-8 w-8 text-apple-blue' />
            <h2 className='text-3xl font-semibold tracking-tight'>
              Work Experience
            </h2>
          </div>
          <div className='space-y-6'>
            {experience.map((job, idx) => (
              <div
                key={idx}
                className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-white p-1 shadow-md flex-shrink-0'>
                      <Image
                        src='/img/stanbic.jpg'
                        alt={job.company}
                        width={48}
                        height={48}
                        className='w-full h-full object-contain rounded-lg'
                      />
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold mb-1'>
                        {job.title}
                      </h3>
                      <p className='text-lg text-apple-blue font-medium mb-1'>
                        {job.company}
                      </p>
                      <p className='text-sm text-foreground/60'>
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <div className='text-foreground/70 md:text-right'>
                    <p className='font-medium'>{job.period}</p>
                  </div>
                </div>
                <ul className='space-y-2'>
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className='flex gap-3 text-foreground/70 text-sm leading-relaxed'
                    >
                      <span className='text-apple-blue mt-1.5 text-xs'>●</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Technical Skills */}
          <section className='mb-16'>
            <div className='flex items-center gap-3 mb-8'>
              <Code2 className='h-8 w-8 text-apple-blue' />
              <h2 className='text-3xl font-semibold tracking-tight'>
                Technical Skills
              </h2>
            </div>
            <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl space-y-6'>
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className='text-lg font-semibold mb-3 text-foreground/80'>
                    {category}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills & Languages */}
          <section className='mb-16'>
            <div className='space-y-8'>
              {/* Soft Skills */}
              <div>
                <h2 className='text-2xl font-semibold mb-6 tracking-tight'>
                  Soft Skills
                </h2>
                <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl'>
                  <div className='flex flex-wrap gap-2'>
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className='text-2xl font-semibold mb-6 tracking-tight'>
                  Languages
                </h2>
                <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {languages.map((lang) => (
                      <div
                        key={lang.name}
                        className='flex justify-between items-center p-3 rounded-xl bg-glass border border-glass-border'
                      >
                        <span className='font-medium'>{lang.name}</span>
                        <span className='text-sm text-foreground/60'>
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className='text-2xl font-semibold mb-6 tracking-tight'>
                  Interests
                </h2>
                <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl'>
                  <div className='flex flex-wrap gap-2'>
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className='px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md'
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <section className='mt-16'>
          <div className='backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl text-center'>
            <h2 className='text-3xl font-semibold mb-4 tracking-tight'>
              Ready to Collaborate?
            </h2>
            <p className='text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed'>
              I'm always interested in discussing new opportunities, innovative
              projects, and ways to contribute to meaningful work.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Button asChild size='lg' className='rounded-full shadow-lg'>
                <Link href='mailto:edmundkophillips@gmail.com'>
                  <Mail className='mr-2 h-5 w-5' />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='rounded-full border-foreground/20 hover:bg-foreground/5'
              >
                <Link href='/projects'>
                  <FileText className='mr-2 h-5 w-5' />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
