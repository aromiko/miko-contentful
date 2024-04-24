import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { Entry } from "contentful";

import { ContentImage } from "../content-image";
import contentfulClient from "../contentful-client";
import { TypeWorkPageSkeleton } from "../types";
import { WorkExperience } from "../work-experience/work-experiences";

type WorkPageProps = Entry<TypeWorkPageSkeleton, undefined, string>;

export interface WorkPage {
  pageTitle: string;
  workPageImage: ContentImage | null;
  description?: RichTextDocument | null;
  workExperiences?: WorkExperience[];
}

export const parseContentfulWorkPage = (
  workPage?: WorkPageProps,
): WorkPage | null => {
  if (!workPage) {
    return null;
  }

  const workExperiences = [];

  // console.log(workPage.fields.workExperiences.fields);

  workPage.fields.workExperiences?.forEach((work) => {
    if (work) {
      console.log(work.fields);
    }
  });

  return {
    pageTitle: workPage?.fields.pageTitle || "",
    workPageImage: null,
    description: workPage?.fields.description || null,
    workExperiences: workPage.fields.workExperiences,
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
  // console.log(workPageResult);

  return parseContentfulWorkPage(workPageResult.items[0]);
};
