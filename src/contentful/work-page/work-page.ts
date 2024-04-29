import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { Entry } from "contentful";

import { ContentImage } from "../content-image";
import contentfulClient from "../contentful-client";
import { TypeHeroSkeleton, TypeWorkPageSkeleton } from "../types";
import { WorkExperience } from "../work-experience/work-experiences";

type WorkPageProps = Entry<TypeWorkPageSkeleton, undefined, string>;

export interface WorkPage {
  pageTitle: string;
  workHero: {
    heroTitle: string;
    heroBody: string;
    heroImage: ContentImage | null;
  };
  workExperiences?: WorkExperience[];
}

export const parseContentfulWorkPage = (
  workPage?: WorkPageProps,
): WorkPage | null => {
  if (!workPage) {
    return null;
  }

  // console.log(workPage.fields.workExperiences.fields);

  // workPage.fields.workExperiences?.forEach((work) => {
  //   if (work) {
  //     console.log(work.fields);
  //   }
  // });

  return {
    pageTitle: workPage?.fields.pageTitle || "",
    workHero: {
      heroTitle: workPage?.fields.pageTitle || "",
      heroBody: workPage?.fields.workHero?.fields.heroBody,
      heroImage: workPage?.fields.workHero?.fields.heroImage,
    },
    workExperiences: workPage?.fields.workExperiences?.map((experience) => ({
      title: experience?.fields.title || "",
      slug: experience?.fields.slug || "",
      position: experience?.fields.position || "",
      workDateRange: experience?.fields.workDateRange || "",
    })),
  };
};

export const fetchWorkPage = async ({
  preview = false,
}: {
  preview: boolean;
}): Promise<WorkPage | null> => {
  const contentful = contentfulClient({ preview });

  const workPageResult = await contentful.getEntries<TypeWorkPageSkeleton>({
    content_type: "workPage",
  });

  return parseContentfulWorkPage(workPageResult.items[0]);
};
