import Hero from "@/components/hero/hero";
import { buttonVariants } from "@/components/ui/button/button";
import { Text } from "@/components/ui/text/text";
import { fetchWorkExperiences } from "@/contentful/work-experience/work-experiences";
import { fetchWorkPage } from "@/contentful/work-page/work-page";
import { draftMode } from "next/headers";
import Link from "next/link";

const WorkPage = async () => {
  const workExperiences = await fetchWorkExperiences({
    preview: draftMode().isEnabled,
  });

  const workPage = await fetchWorkPage({
    preview: draftMode().isEnabled,
  });

  console.log(workPage?.workHero?.heroImage);

  return (
    <div className="container py-20 flex-grow">
      <Hero
        title={workPage?.workHero?.heroTitle || ""}
        body={workPage?.workHero?.heroBody}
        imageSrc={workPage?.workHero?.heroImage?.fields.file.url}
        imageAlt={workPage?.workHero?.heroImage?.fields.file.alt}
      />
      <div className="flex">
        <ul>
          {workPage &&
            workPage.workExperiences?.map((workExperience) => (
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
