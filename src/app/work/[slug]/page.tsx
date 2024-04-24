import BackButton from "@/components/navigation/back-button";
import { Text } from "@/components/ui/text/text";
import RichText from "@/contentful/contentful-rich-text";
import {
  fetchWorkExperience,
  fetchWorkExperiences,
} from "@/contentful/work-experience/work-experiences";
import { fetchWorkPage } from "@/contentful/work-page/work-page";
import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

interface WorkExperiencePageParams {
  slug: string;
}

interface WorkExperiencePageProps {
  params: WorkExperiencePageParams;
}

export const generateStaticParams = async (): Promise<
  WorkExperiencePageParams[]
> => {
  const workExperiences = await fetchWorkExperiences({ preview: false });

  return workExperiences.map((workExperience) => ({
    slug: workExperience.slug,
  }));
};

export const generateMetadata = async (
  { params }: WorkExperiencePageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const workExperience = await fetchWorkExperience({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!workExperience) {
    return notFound();
  }

  return {
    title: workExperience.title,
  };
};

const WorkExperiencePage = async ({ params }: WorkExperiencePageProps) => {
  const workExperience = await fetchWorkExperience({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!workExperience) {
    return notFound();
  }

  const workPage = await fetchWorkPage({ preview: draftMode().isEnabled });

  return (
    <div className="container py-20 flex-grow">
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="flex flex-row gap-4">
        {workExperience.companyLogo && (
          <img
            className="size-28"
            src={workExperience.companyLogo.src}
            srcSet={`${workExperience.companyLogo.src}?w=300 1x, ${workExperience.companyLogo.src} 2x`}
            alt={workExperience.companyLogo.alt}
          />
        )}
        <div className="flex flex-col">
          <Text as="h1" variant="h1">
            {workExperience.title}
          </Text>
          <Text variant="h4">{workExperience.position}</Text>
          <Text variant="lead">{workExperience.workDateRange}</Text>
          <div className="pt-8">
            <RichText document={workExperience.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
