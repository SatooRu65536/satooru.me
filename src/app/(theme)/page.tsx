import AboutSection from '@/components/sections/About';
import AwardsSection from '@/components/sections/Awards';
import ExperiencesSection from '@/components/sections/Experiences';
import LinksSection from '@/components/sections/Links';
import RecentPostsSection from '@/components/sections/Posts';
import PresentationsSection from '@/components/sections/Presentations';
import ProductsSection from '@/components/sections/Products';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import WorksSection from '@/components/sections/Works';

export default function Page() {
  return (
    <>
      <AboutSection />
      <LinksSection />
      <SkillsSection />
      <ProjectsSection />
      <WorksSection />
      <ExperiencesSection />
      <PresentationsSection />
      <AwardsSection />
      <RecentPostsSection />
      <ProductsSection />
    </>
  );
}
