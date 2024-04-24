import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

import type { TypeWorkExperienceSkeleton } from "./TypeWorkExperience";

export interface TypeWorkPageFields {
  pageTitle: EntryFieldTypes.Symbol;
  workPageImage?: EntryFieldTypes.AssetLink;
  description?: EntryFieldTypes.RichText;
  workExperiences?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeWorkExperienceSkeleton>
  >;
}

export type TypeWorkPageSkeleton = EntrySkeletonType<
  TypeWorkPageFields,
  "workPage"
>;
export type TypeWorkPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeWorkPageSkeleton, Modifiers, Locales>;
