import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <Header />
      <h2 className="text-4xl font-bold text-white">Create Your Perfect Resume</h2>
      <p className="text-lg text-white mt-4">Choose from our templates and customize your resume.</p>
      
      {/* Link Wraps the Button */}
      <Link href="/templates">
        <button className="mt-8 px-6 py-2 bg-white text-blue-500 rounded-full">
          Start Now
        </button>
      </Link>
    </div>
  );
}
