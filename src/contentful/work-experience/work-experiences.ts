import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { Entry } from "contentful";

import { ContentImage, parseContentfulContentImage } from "../content-image";
import contentfulClient from "../contentful-client";
import { TypeWorkExperienceSkeleton } from "../types";

type WorkExperienceProps = Entry<TypeWorkExperienceSkeleton, undefined, string>;

interface FetchWorkExperiencesProps {
  preview: boolean;
}

interface FetchWorkExperienceProps {
  slug: string;
  preview: boolean;
}

export interface WorkExperience {
  title: string;
  slug: string;
  position: string;
  workDateRange: string;
  description?: RichTextDocument | null;
  companyLogo?: ContentImage | null;
}

export const parseContentfulWorkExperience = (
  workExperience?: WorkExperienceProps,
): WorkExperience | null => {
  if (!workExperience) {
    return null;
  }

  return {
    title: workExperience?.fields.title || "",
    slug: workExperience?.fields.slug || "",
    position: workExperience?.fields.position || "",
    workDateRange: workExperience?.fields.workDateRange || "",
    description: workExperience?.fields.description || null,
    companyLogo: parseContentfulContentImage(
      workExperience?.fields.companyLogo,
    ),
  };
};

export const fetchWorkExperiences = async ({
  preview,
}: FetchWorkExperiencesProps): Promise<WorkExperience[]> => {
  const contentful = contentfulClient({ preview });

  const workExperiencesResult =
    await contentful.getEntries<TypeWorkExperienceSkeleton>({
      content_type: "workExperience",
    });

  return workExperiencesResult.items.map(
    (workExperience) =>
      parseContentfulWorkExperience(workExperience) as WorkExperience,
  );
};

export const fetchWorkExperience = async ({
  slug,
  preview,
}: FetchWorkExperienceProps): Promise<WorkExperience | null> => {
  const contentful = contentfulClient({ preview });

  const workExperienceResult =
    await contentful.getEntries<TypeWorkExperienceSkeleton>({
      content_type: "workExperience",
      "fields.slug": slug,
    });

  return parseContentfulWorkExperience(workExperienceResult.items[0]);
};
