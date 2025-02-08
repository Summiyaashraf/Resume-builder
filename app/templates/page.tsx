// app/templates/page.tsx

import TemplateCard from "../components/TemplateCard";

export default function Templates() {
  const templates = ['Professional', 'Creative', 'Student'];

  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl text-center mb-8">Choose Your Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <TemplateCard key={index} template={template} />
        ))}
      </div>
    </div>
  );
}
