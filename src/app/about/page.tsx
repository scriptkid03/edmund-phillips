import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <section className='max-w-4xl mx-auto p-6 space-y-6 lg:mt-32'>
      <h1 className='text-3xl font-bold mb-4'>About Me</h1>

      <Card className='shadow-md'>
        <CardContent className='p-6 space-y-4'>
          <p>
            Hi, I’m <span className='font-semibold'>Edmund</span>, a frontend
            developer passionate about building clean, responsive, and
            user-friendly web applications. I enjoy experimenting with{" "}
            <span className='font-medium'>
              Next.js, Angular, React Native, and Tailwind
            </span>
            .
          </p>

          <p>
            Right now, I’m diving deeper into mobile app development and
            improving my full-stack skills with MongoDB, Prisma, and Cloudinary.
          </p>

          <p className='italic text-muted-foreground'>
            Fun fact: Outside coding, I enjoy [🎵 music / 🎮 gaming / ⚽ sports
            – customize this].
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
