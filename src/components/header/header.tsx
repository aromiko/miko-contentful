import { Text } from "@/components/ui/text/text";
import Link from "next/link";

import ThemeToggle from "../theme/theme-toggle";
import { Button } from "../ui/button/button";

const Header = () => {
  return (
    <header className="container w-full flex justify-between p-4 gap-4">
      <Link href="/">
        <Text variant="h2">miko aro</Text>
      </Link>
      <nav className="ml-auto">
        <Link href="/work">
          <Button variant="link">work</Button>
        </Link>
        <Link href="/life">
          <Button variant="link">life</Button>
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
