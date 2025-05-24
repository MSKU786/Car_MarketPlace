import { SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { CarFront } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

const Header = async ({ isAdminPage = false }) => {
  return (
    // <div>
    //   <SignedOut>
    //     <SignInButton />
    //     <SignUpButton />
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </div>
    <header className="fixed top-0 w-full z-50 flex items-center justify-between bg-white/80 backdrop-blur-md p-4 shadow-md border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? '/admin' : '/'}>
          <Image
            src={'/logo.png'}
            alt="Logo"
            width={100}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </Link>
        {isAdminPage && <span className="text-xs font-extralight">admin</span>}
      </nav>
      <div className="flex items-center gap-4">
        <SignedIn>
          <Link href="/saved-cars">
            <Button>
              <CarFront size={18} />
              <span className="hidden md:inline">Saved Cars</span>
            </Button>
          </Link>
          {isAdminPage ? (
            <Link href="/reserrvations">
              <Button>
                <CarFront size={18} />
                <span className="hidden md:inline">My Reservations</span>
              </Button>
            </Link>
          ) : (
            <Link href="/admin">
              <Button>
                <CarFront size={18} />
                <span className="hidden md:inline">Admin Portal</span>
              </Button>
            </Link>
          )}
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
