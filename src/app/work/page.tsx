import { buttonVariants } from "@/components/ui/button/button";
import { Text, textVariants } from "@/components/ui/text/text";
import { fetchWorkExperiences } from "@/contentful/work-experience/work-experiences";
import { draftMode } from "next/headers";
import Link from "next/link";

const WorkPage = async () => {
  const workExperiences = await fetchWorkExperiences({
    preview: draftMode().isEnabled,
  });

  return (
    <div className="container py-20 flex-grow">
      <Text as="h1" variant="h1" className="pb-4">
        Work Experience
      </Text>
      <div className="flex">
        <ul>
          {workExperiences.map((workExperience) => (
            <li key={workExperience.slug}>
              <Link
                href={`work/${workExperience.slug}`}
                className={buttonVariants({ variant: "link" })}
              >
                {workExperience.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkPage;
