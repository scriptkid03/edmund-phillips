import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  FileText,
  Code2,
} from "lucide-react";
import EducationSection from "@/components/education";
import ExperienceSection from "@/components/experience";

export default function Resume() {
  const personalInfo = {
    name: "Edmund Kwame Odame Phillips",
    title: "Full-Stack Developer",
    email: "edmundkophillips@gmail.com",
    phone: "+233 20 896 8930",
    location: "Accra, Ghana",
    website: "edmund-phillips.vercel.app",
    github: "scriptkid03",
    linkedin: "edmund-phillips", // Replace with actual LinkedIn username
  };

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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <section className="mb-16">
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-2xl text-apple-blue font-medium mb-6">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                  Passionate Full-Stack Developer specializing in modern web and
                  mobile applications. Currently pursuing B.Sc. in Computer
                  Science with hands-on experience in frontend and backend
                  development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/70">
                  <Link
                    href={"mailto:edmundkophillips@gmail.com"}
                    className="flex items-center gap-3"
                  >
                    <Mail className="h-5 w-5 text-apple-blue" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </Link>
                  <Link
                    href={"tel:+233208968930"}
                    className="flex items-center gap-3"
                  >
                    <Phone className="h-5 w-5 text-apple-blue" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </Link>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-apple-blue" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <Link
                    href={"https://www.edmund-phillips.vercel.app"}
                    className="flex items-center gap-3"
                  >
                    <Globe className="h-5 w-5 text-apple-blue" />
                    <span className="text-sm">{personalInfo.website}</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  className="rounded-full shadow-lg w-full lg:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
                <div className="flex gap-3 justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <EducationSection />
        <ExperienceSection />
        <div className="grid lg:grid-cols-2 gap-8">
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="h-8 w-8 text-apple-blue" />
              <h2 className="text-3xl font-semibold tracking-tight">
                Technical Skills
              </h2>
            </div>
            <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-8 shadow-xl space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-3 text-foreground/80">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6 tracking-tight">
                  Soft Skills
                </h2>
                <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6 tracking-tight">
                  Languages
                </h2>
                <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {languages.map((lang) => (
                      <div
                        key={lang.name}
                        className="flex justify-between items-center p-3 rounded-xl bg-glass border border-glass-border"
                      >
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-foreground/60">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-6 tracking-tight">
                  Interests
                </h2>
                <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-xl bg-glass border border-glass-border shadow-md"
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

        <section className="mt-16">
          <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in discussing new opportunities, innovative
              projects, and ways to contribute to meaningful work.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full shadow-lg">
                <Link href="mailto:edmundkophillips@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-foreground/20 hover:bg-foreground/5"
              >
                <Link href="/projects">
                  <FileText className="mr-2 h-5 w-5" />
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
