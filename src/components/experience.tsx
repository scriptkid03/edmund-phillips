import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      logo: "/img/stanbic.jpg",
      link: "https://www.stanbicbank.com.gh/gh/personal",
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
      logo: "/img/stanbic.jpg",
      link: "https://www.stanbicbank.com.gh/gh/personal",
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
  return (
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
                <div className='flex flex-col md:hidden gap-4'>
                  <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-xl bg-white p-1 shadow-md flex-shrink-0'>
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={48}
                        height={48}
                        className='w-full h-full object-contain rounded-lg'
                      />
                    </div>
                    <div>
                      <Link href={job.link}>
                        <h3 className='text-xl font-semibold mb-1'>
                          {job.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className='text-lg text-apple-blue font-medium mb-1'>
                      {job.company}
                    </p>
                    <p className='text-sm text-foreground/60'>{job.location}</p>
                  </div>
                </div>
                <div className='flex max-md:hidden gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-white p-1 shadow-md flex-shrink-0'>
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={48}
                      height={48}
                      className='w-full h-full object-contain rounded-lg'
                    />
                  </div>
                  <div>
                    <Link href={job.link}>
                      <h3 className='text-xl font-semibold mb-1'>
                        {job.title}
                      </h3>
                    </Link>
                    <p className='text-lg text-apple-blue font-medium mb-1'>
                      {job.company}
                    </p>
                    <p className='text-sm text-foreground/60'>{job.location}</p>
                  </div>
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
  );
}

export function ExperienceSectionShort() {
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Stanbic Bank Ghana",
      logo: "/img/stanbic.jpg",
      link: "https://www.stanbicbank.com.gh/gh/personal",
      period: "Jun. 2024 – Jul. 2024",
      location: "Accra, Ghana",
      achievements: [
        "Developed and maintained responsive web applications using Angular, HTML, CSS, JavaScript, and TypeScript",
        "Collaborated with designers to translate mockups and prototypes into functional user interfaces",
        "Explored backend development concepts using Spring Boot, gaining foundational knowledge in API creation",
        "Worked with backend teams to ensure seamless integration between frontend and backend functionality",
      ],
    },
  ];
  return (
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
                <div className='flex flex-col md:hidden gap-4'>
                  <div className='flex gap-3'>
                    <div className='w-12 h-12 rounded-xl bg-white p-1 shadow-md flex-shrink-0'>
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={48}
                        height={48}
                        className='w-full h-full object-contain rounded-lg'
                      />
                    </div>
                    <div>
                      <Link href={job.link}>
                        <h3 className='text-xl font-semibold mb-1'>
                          {job.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className='text-lg text-apple-blue font-medium mb-1'>
                      {job.company}
                    </p>
                    <p className='text-sm text-foreground/60'>{job.location}</p>
                  </div>
                </div>
                <div className='flex max-md:hidden gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-white p-1 shadow-md flex-shrink-0'>
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={48}
                      height={48}
                      className='w-full h-full object-contain rounded-lg'
                    />
                  </div>
                  <div>
                    <Link href={job.link}>
                      <h3 className='text-xl font-semibold mb-1'>
                        {job.title}
                      </h3>
                    </Link>
                    <p className='text-lg text-apple-blue font-medium mb-1'>
                      {job.company}
                    </p>
                    <p className='text-sm text-foreground/60'>{job.location}</p>
                  </div>
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
      <div className='mt-6 flex justify-center text-center'>
        <Link
          href='/resume'
          className='text-apple-blue hover:text-apple-blue-hover font-medium transition-colors max-md:text-md flex gap-3'
        >
          View Full Resume
          <ArrowRight className='h-6 w-6' />
        </Link>
      </div>
    </section>
  );
}
