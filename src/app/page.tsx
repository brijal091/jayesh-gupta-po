import { lazy, Suspense } from 'react';
import HeroSection from "@/pages/HeroSection";
import Testimonials from '@/components/common/Testimonials';

const Services = lazy(() => import("@/components/offering/Services"));

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
        <Suspense key={id} fallback={<SectionLoader />}>
          <div className={(index + 1) % 2 === 0 ? 'bg-primary-50' : ''}>
            <Component />
          </div>
        </Suspense>
      ))}
    </>
  );
}