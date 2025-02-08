"use client";  // Make sure this is a client-side component

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";  // Correctly import useRouter for navigation

export default function EditorPage() {
  const params = useParams(); // Get the params from the useParams hook
  const router = useRouter(); // Initialize router for navigation

  const [templateString, setTemplateString] = useState<string | null>(null);

  useEffect(() => {
    if (params?.template) {
      // Extract the template string, handle arrays or direct string
      const templateParam = Array.isArray(params.template)
        ? params.template[0]
        : params.template;
      setTemplateString(templateParam.toLowerCase());
    }
  }, [params]);

  const renderTemplateContent = (template: string) => {
    switch (template) {
      case "professional":
        return (
          <div className="flex flex-col items-center p-6">
            <img
              src="/images/professional.jpg"
              alt="Professional Template"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold mb-4">Professional Resume Layout</h2>
            <p className="text-lg mb-4">Fill out sections like work experience, skills, etc.</p>
          </div>
        );
      case "creative":
        return (
          <div className="flex flex-col items-center p-6">
            <img
              src="/images/creative.jpg"
              alt="Creative Template"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold mb-4">Creative Resume Layout</h2>
            <p className="text-lg mb-4">Personalize your resume with creative designs!</p>
          </div>
        );
      case "student":
        return (
          <div className="flex flex-col items-center p-6">
            <img
              src="/images/student.jpg"
              alt="Student Template"
              className="w-full h-auto rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold mb-4">Student Resume Layout</h2>
            <p className="text-lg mb-4">Highlight your education and internships.</p>
          </div>
        );
      default:
        return <div>Please choose a valid template.</div>;
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Editing Template: {templateString}</h1>
      {templateString && renderTemplateContent(templateString)}

      {/* Button to navigate to Builder */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/builder")} 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go to Builder
        </button>
      </div>
    </div>
  );
}
