import Link from "next/link";

import Container from "@/components/Container";
import UploadButton from "../UploadButton";
import Logo from "../primitives/Logo.component";

const Nav = () => {
  return (
    <nav className="flex items-center h-16 border border-zinc-200">
      <Container className="flex gap-6 items-center flex-row">
        <p className="w-40 flex-grow-0 mb-0">
          <Logo path="/" />
        </p>
        <ul className="flex flex-grow justify-end gap-6 m-0">
          <li>
            <UploadButton />
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
