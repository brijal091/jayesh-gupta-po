import { EXPERIENCES, PROJECTS } from "@/constants/experience";
import React from "react";
import FolderCard from "./common/card/FolderCard";

const ProfessionalWork = () => {
  const calculateDuration = (
    startDate: string | number | Date,
    endDate = "Present"
  ) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    const diffInMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    if (years === 0) return `${months} mos`;
    if (months === 0) return `${years} yr${years > 1 ? "s" : ""}`;
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${
      months > 1 ? "s" : ""
    }`;
  };

  const parseDuration = (durationStr: string) => {
    const [start, end] = durationStr.split(" - ");
    return { start, end: end || "Present" };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr] gap-2">
      <div className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-2xl p-2">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-2 h-8 bg-primary-100 rounded-full mr-4"></div>
            Experience
          </h2>

          <div className="space-y-8">
            {EXPERIENCES.map((company, companyIndex) => {
              const firstRole = company.roles[0];
              const lastRole = company.roles[company.roles.length - 1];
              const { start: companyStart } = parseDuration(lastRole.duration);
              const { end: companyEnd } = parseDuration(firstRole.duration);
              const totalDuration = calculateDuration(
                companyStart,
                companyEnd === "Present" ? "Present" : companyEnd
              );

              return (
                <div key={companyIndex} className="relative">
                  {/* Company Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                      <span className="text-primary-200 font-bold text-lg">
                        {company.company
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {company.company}
                      </h3>
                      <p className="text-primary-100 text-sm mb-1">
                        {company.type} · {totalDuration}
                      </p>
                    </div>
                  </div>

                  {/* Timeline for roles */}
                  <div className="relative ml-6">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-100/30"></div>

                    {company.roles.map((role, roleIndex) => {
                      const { start, end } = parseDuration(role.duration);
                      const calculatedDuration = calculateDuration(start, end);

                      return (
                        <div
                          key={roleIndex}
                          className="relative pb-8 last:pb-0"
                        >
                          {/* Timeline dot */}
                          <div className="absolute -left-2 top-2 w-4 h-4 bg-primary-100 rounded-full border-2 border-primary-200 shadow-sm"></div>

                          {/* Role content */}
                          <div className="ml-6">
                            <h4 className="text-lg font-semibold text-white mb-2">
                              {role.title}
                            </h4>
                            <p className="text-primary-100 text-sm mb-2">
                              {start} - {end} · {calculatedDuration}
                            </p>
                            <p className="text-primary-100 text-sm mb-2">
                              📍 {role.location}
                            </p>
                            {role.description && (
                              <p className="text-white/80 text-sm mb-3">
                                {role.description}
                              </p>
                            )}
                            {role.skills && (
                              <div className="flex flex-wrap gap-2">
                                {role.skills.map((skill, skillIndex) => (
                                  <span
                                    key={skillIndex}
                                    className="px-3 py-1 bg-primary-100/20 text-primary-100 rounded-full text-xs font-medium"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Projects Column - Placeholder */}
      <div>
        <div className="rounded-2xl p-2">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-2 h-8 bg-primary-100 rounded-full mr-4"></div>
            Projects
          </h2>
          <div className="flex items-center justify-center h-64 text-white/60">
            {PROJECTS.length === 0 ? (
              <div className="flex items-center justify-center h-64 text-white/60">
                <p className="text-lg">Projects coming soon...</p>
              </div>
            ) : (
              <div className="space-y-6 w-full">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {PROJECTS.map((project) => (
                    <FolderCard
                      key={project.id}
                      year={project.year}
                      title={project.name}
                      company={project.comapny} 
                      type={project.type}
                      image={project.image}
                    />
                  ))}
                </div>

                {/* View All Button */}
                {PROJECTS.length > 3 && (
                  <div className="flex justify-center pt-4">
                    <button
                      // onClick={handleViewAll}
                      className="px-6 py-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200 hover:bg-white/5"
                    >
                      View All Projects ({PROJECTS.length})
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalWork;
