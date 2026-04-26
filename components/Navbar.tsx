import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/70 border-b border-border">
      <div className="text-accent-blue font-bold text-xl tracking-tighter">
        SHADY ATTIA
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-accent-blue transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-accent-blue transition-colors">Projects</Link>
        <Link href="/cv" className="hover:text-accent-blue transition-colors">Resume</Link>
        <Link href="#contact" className="px-4 py-2 bg-accent-blue text-background rounded-full hover:bg-accent-blue-light transition-all">
          Contact
        </Link>
      </div>
    </nav>
  );
}
