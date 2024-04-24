import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import Link from "next/link";

import Icon from "../ui/icon/icon";

interface SocialLinksProps {
  className?: string;
}

const links = [
  { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { name: "Linkedin", href: "https://linkedin.com", icon: "Linkedin" },
];

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn(className, "flex flex-row gap-4")}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon name={link.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
