import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      institution: "Academic City University",
      instLink: "https://www.acity.edu.gh/",
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
      instLink: "https://www.aggreymemorial.com/",
      degree: "General Science",
      period: "Sept. 2018 - Oct. 2021",
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
  return (
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
                <div className='max-md:hidden flex gap-4'>
                  <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div>
                    <Link href={edu.instLink}>
                      <h3 className='text-xl font-semibold mb-1'>
                        {edu.institution}
                      </h3>
                    </Link>
                    <p className='text-lg text-foreground/70 mb-1'>
                      {edu.degree}
                    </p>
                    <p className='text-foreground/60'>{edu.location}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 md:hidden'>
                  <div className='flex gap-4'>
                    <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={64}
                        height={64}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div>
                      <Link href={edu.instLink}>
                        <h3 className='text-xl font-semibold mb-1'>
                          {edu.institution}
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <p className='text-lg text-foreground/70 mb-1'>
                      {edu.degree}
                    </p>
                    <p className='text-foreground/60'>{edu.location}</p>
                  </div>
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
  );
}

export function EducationSectionShort() {
  const education = [
    {
      institution: "Academic City University",
      instLink: "https://www.acity.edu.gh/",
      degree: "B.Sc. Computer Science",
      period: "Jan. 2022 - Jun. 2025 (Graduated)",
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
  ];
  return (
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
                <div className='max-md:hidden flex gap-4'>
                  <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={64}
                      height={64}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div>
                    <Link href={edu.instLink}>
                      <h3 className='text-xl font-semibold mb-1'>
                        {edu.institution}
                      </h3>
                    </Link>
                    <p className='text-lg text-foreground/70 mb-1'>
                      {edu.degree}
                    </p>
                    <p className='text-foreground/60'>{edu.location}</p>
                  </div>
                </div>
                <div className='flex flex-col gap-4 md:hidden'>
                  <div className='flex gap-4'>
                    <div className='w-16 h-16 rounded-xl bg-white p-2 shadow-md flex-shrink-0'>
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={64}
                        height={64}
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <div>
                      <Link href={edu.instLink}>
                        <h3 className='text-xl font-semibold mb-1'>
                          {edu.institution}
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div className='flex flex-col w-full'>
                    <p className='text-lg text-foreground/70 mb-1'>
                      {edu.degree}
                    </p>
                    <p className='text-foreground/60'>{edu.location}</p>
                  </div>
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
      <div className='mt-6 flex justify-center text-center'>
        <Link
          href='/resume'
          className='max-md:text-md text-apple-blue hover:text-apple-blue-hover font-medium transition-colors flex gap-3'
        >
          View Full Resume
          <ArrowRight className='h-6 w-6' />
        </Link>
      </div>
    </section>
  );
}
