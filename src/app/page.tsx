import { lazy, Suspense } from 'react';
import HeroSection from "@/pages/HeroSection";

const Services = lazy(() => import("@/components/offering/Services"));
const Testimonials = lazy(() => import("@/components/common/Testimonials"));

const dynamicSections = [
  { id: 'hero', Component: HeroSection },
  { id: 'services', Component: Services },
  { id: 'testimonials', Component: Testimonials },
];

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Dynamically render sections */}
      {dynamicSections.map(({ id, Component }, index) => (
        <div key={id} className={(index + 1) % 2 === 0 ? 'bg-primary-50' : ''}>
          <Suspense fallback={<SectionLoader />}>
            <Component />
          </Suspense>
        </div>
      ))}
    </>
  );
}