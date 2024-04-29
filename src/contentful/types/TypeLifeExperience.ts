import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeLifeExperienceFields {
  lifeTitle: EntryFieldTypes.Symbol;
  lifeDescription?: EntryFieldTypes.RichText;
  lifeImage?: EntryFieldTypes.AssetLink;
}

export type TypeLifeExperienceSkeleton = EntrySkeletonType<
  TypeLifeExperienceFields,
  "lifeExperience"
>;
export type TypeLifeExperience<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeLifeExperienceSkeleton, Modifiers, Locales>;
