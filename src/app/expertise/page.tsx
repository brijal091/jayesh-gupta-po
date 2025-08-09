import Expertise from "@/components/expertise/Expertise";

export default function ExpertisePage() {
  return (
      <div className="container mx-auto px-4 py-8">
         <h1 className="text-4xl font-bold text-white mb-8">Expertise and Services</h1>
      <div className="text-white">
        <p className="text-lg mb-4">
          A comprehensive showcase of my technical skills, certifications, and professional expertise built through years of hands-on experience and continuous learning
        </p>
        <Expertise />
      </div>
    </div>
  );
}
