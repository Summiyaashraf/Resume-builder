"use client"; 

import { useRouter } from "next/navigation"; 

export default function TemplateCard({ template }: { template: string }) {
  const router = useRouter();

  const handleChoose = () => {
    router.push(`/editor/${template.toLowerCase()}`); // Use this to navigate to the dynamic route
  };
  
  return (
    <div className="p-6 border rounded-lg shadow-lg hover:scale-105 transition-transform">
      <img
        src={`/images/${template.toLowerCase()}.jpg`}
        alt={template}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-semibold">{template}</h3>
      <button
        onClick={handleChoose} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Choose
      </button>
    </div>
  );
}
