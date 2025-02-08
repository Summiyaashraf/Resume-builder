"use client";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    certifications: "",
   
  });

  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement | null>(null); // ✅ Correct ref type

  // 🟢 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Save Resume button logic
  const handleSaveResume = () => {
    setShowResume(true);const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData((prev) => ({ ...prev, profilePic: reader.result as string }));
          };
          reader.readAsDataURL(file);
        }
      };
      const handleSaveResume = () => {
        setShowResume(true);
      };
    
  };

  // 🟢 Fix: Use `contentRef` instead of `content`
  const handlePrint = useReactToPrint({
    contentRef: resumeRef, // ✅ Fixed issue (No TypeScript error)
    documentTitle: "My_Resume",
  });

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">🚀 Resume Builder</h1>

      {/* 🟢 Resume Form */}
      {!showResume && (
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Fill Your Details</h2>

          <div className="mb-4">
            <label className="block text-lg font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Education:</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your education details"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Experience:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your work experience"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter your skills"
            />
          </div>

          <button
            onClick={handleSaveResume}
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Save Resume
          </button>
        </div>
      )}

      {/* 🟢 Resume Output */}
      {showResume && (
        <div className="w-full max-w-2xl p-6 mt-6 bg-white rounded-lg shadow-lg">
          <div ref={resumeRef} className="p-6 bg-gray-50 rounded-lg text-center">
            
            <h2 className="text-3xl font-bold mb-4">{formData.name}</h2>
            <p className="text-lg text-gray-700">📧 {formData.email}</p>
            <p className="text-lg text-gray-700">📞 {formData.phone}</p>
            <p className="text-lg text-gray-700">🏡 {formData.address}</p>
            <h3 className="text-xl font-semibold mt-4">🎓 Education</h3>
            <p className="text-gray-600">{formData.education}</p>
            <h3 className="text-xl font-semibold mt-4">💼 Experience</h3>
            <p className="text-gray-600">{formData.experience}</p>
            <h3 className="text-xl font-semibold mt-4">🛠 Skills</h3>
            <p className="text-gray-600">{formData.skills}</p>
            <h3 className="text-xl font-semibold mt-4">📁 Projects</h3>
            <p className="text-gray-600">{formData.projects}</p>
            <h3 className="text-xl font-semibold mt-4">🏆 Certifications</h3>
            <p className="text-gray-600">{formData.certifications}</p>
          </div>

          {/* 🟢 Fix: Wrapping `handlePrint` in an arrow function */}
          <button
            onClick={() => handlePrint()} // ✅ No TypeScript error
            className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
}
