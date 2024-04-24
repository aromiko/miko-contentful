import { Text } from "@/components/ui/text/text";

import SocialLinks from "../social-links/social-links";

const Footer = () => {
  return (
    <footer className="container flex flex-col p-4">
      <SocialLinks className="pb-4" />
      <a href="mailto:contact@miko-aro.com">
        <Text variant="p">contact@miko-aro.com</Text>
      </a>
      <Text variant="p">© 2024</Text>
    </footer>
  );
};

export default Footer;
