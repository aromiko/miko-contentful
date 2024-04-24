import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeHeroFields {
  heroTitle: EntryFieldTypes.Symbol;
  heroBody?: EntryFieldTypes.Text;
  heroImage?: EntryFieldTypes.AssetLink;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeHeroSkeleton, Modifiers, Locales>;
