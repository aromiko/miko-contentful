import { Text, textVariants } from "@/components/ui/text/text";

const Home = async () => {
  return (
    <main className="flex-grow">
      <div className="container py-20">
        <Text as="h1" variant="h1" className="pb-4">
          Creating experiences that fuel work and life.
        </Text>
        <Text as="p" variant="lead">
          {`I'm Miko, a web developer focusing mainly on frontend development,
          user interface and experience.`}
        </Text>
      </div>
    </main>
  );
};

export default Home;
