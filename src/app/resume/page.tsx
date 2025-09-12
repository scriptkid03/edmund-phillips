import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <section className='max-w-3xl mx-auto p-6 space-y-6 lg:mt-32'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Resume</h1>
        <Button asChild>
          <a href='/resume.pdf' download>
            Download PDF
          </a>
        </Button>
      </div>

      <div className='space-y-4'>
        <div>
          <h2 className='text-xl font-semibold'>Summary</h2>
          <p className='text-muted-foreground'>
            Frontend developer skilled in building modern, responsive, and
            user-friendly applications using Next.js, React Native, Angular, and
            MongoDB. Passionate about clean UI and smooth user experiences.
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Skills</h2>
          <ul className='list-disc list-inside text-muted-foreground'>
            <li>Frontend: React, Next.js, Angular, Tailwind, NativeWind</li>
            <li>Backend: Node.js, Prisma, MongoDB</li>
            <li>Tools: Git/GitHub, Cloudinary, Figma</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Projects</h2>
          <ul className='list-disc list-inside text-muted-foreground'>
            <li>Hospital Appointment System – Next.js, MongoDB</li>
            <li>Event & Décor Rental Website – Next.js, Prisma, Cloudinary</li>
            <li>Campus Event Hub – Angular, Prisma</li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Education</h2>
          <p className='text-muted-foreground'>
            [Your University], [Degree/Program]
          </p>
        </div>
      </div>
    </section>
  );
}
