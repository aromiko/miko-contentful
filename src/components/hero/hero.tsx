import { Text } from "@/components/ui/text/text";

interface HeroProps {
  title: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero = ({ title, body, imageSrc, imageAlt }: HeroProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <Text as="h1" variant="h1" className="pb-2">
          {title}
        </Text>
        <Text as="p" variant="lead" className="pb-4">
          {body}
        </Text>
      </div>
      <div className="w-full md:w-1/2 bg-">
        <img
          className="size-96 object-cover"
          src={imageSrc}
          srcSet={`${imageSrc}?w=300 1x, ${imageSrc} 2x`}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default Hero;
