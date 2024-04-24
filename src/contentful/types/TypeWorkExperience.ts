import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWorkExperienceFields {
  title: EntryFieldTypes.Symbol;
  position: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.RichText;
  workDateRange: EntryFieldTypes.Symbol;
  companyLogo?: EntryFieldTypes.AssetLink;
  workGallery?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeWorkExperienceSkeleton = EntrySkeletonType<
  TypeWorkExperienceFields,
  "workExperience"
>;
export type TypeWorkExperience<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeWorkExperienceSkeleton, Modifiers, Locales>;
