// import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
// import { PiInstagramLogo, PiWhatsappLogo, PiTiktokLogo } from "";
// import { Separator } from "./separator";
import Link from "next/link";
// import Image from "next/image";

function Footer() {
  return (
    <>
      {/* <Separator /> */}
      <footer className='py-8 border-t'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col items-center'>
            {/* <div className='mb-8 rounded-full bg-primary/10 p-8'>
              <Icons.logo className='icon-class w-6' />
              <Image
                src='/images/logo.png'
                width={100}
                height={100}
                priority
                alt='VR logo'
                className='w-6 z-50'
              />
            </div> */}
            <div className='mb-3 flex space-x-4'>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full cursor-pointer'
              >
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  <Linkedin className='h-5 w-5' />
                  <span className='sr-only'>LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full cursor-pointer'
              >
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  <Mail className='h-5 w-5' />
                  <span className='sr-only'>Mail</span>
                </Link>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full cursor-pointer'
              >
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  <Github className='h-5 w-5' />
                  <span className='sr-only'>Github</span>
                </Link>
              </Button>
              {/* <Button
                variant='outline'
                size='icon'
                className='rounded-full cursor-pointer'
              >
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                  <PiWhatsappLogo className='h-5 w-5' />
                  <span className='sr-only'>WhatsApp</span>
                </Link>
              </Button> */}
            </div>
            {/* <nav className='mb-8 flex-wrap justify-center gap-6 hidden md:flex'>
              <Link href='/' className='hover:text-primary'>
                Home
              </Link>
              <Link href='/catalog' className='hover:text-primary'>
                Catalog
              </Link>
              <Link href='/about' className='hover:text-primary'>
                About
              </Link>
              <Link href='/contact' className='hover:text-primary'>
                Contact
              </Link>
              <Link href='/rental-policy' className='hover:text-primary'>
                Rental Policy
              </Link>
              <Link href='/admin' className='hover:text-primary'>
                Admin
              </Link>
            </nav> */}
            {/* <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full" />
              </div>
              <Button type="submit" className="rounded-full">Subscribe</Button>
            </form>
          </div> */}
            <div className='text-center mb-16'>
              <p className='text-sm text-muted-foreground'>
                © {new Date().getFullYear()} Edmund Phillips.
                <br className='lg:hidden' />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
