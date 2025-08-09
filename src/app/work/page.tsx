
import ProfetionalWork from "@/components/ProfetionalWork";

export default function Work() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">My Work</h1>
      <div className="text-white">
        <p className="text-lg mb-4">
          Explore my portfolio of projects, case studies, and professional
          work. Each project showcases different skills and technologies.
        </p>
        <ProfetionalWork />
      </div>
    </div>
  );
}
