import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@/lib/types";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ElementType, ReactElement, forwardRef } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-base",
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-extrabold tracking-tight first:mt-0 lg:text-4xl",
      h3: "scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl",
      h4: "scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl",
      p: "leading-7 text-base [&:not(:first-child)]:mt-2",
      blockquote: "text-base mt-4 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type TextProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textVariants>
>;

const Text = forwardRef(
  <C extends ElementType = "span">(
    { as, variant, className, ...props }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ): ReactElement | null => {
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({
            variant,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);

Text.displayName = "Text";

export { Text, textVariants };
