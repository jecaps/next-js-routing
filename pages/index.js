import Link from "next/link";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <>
      <h1>Home content here</h1>
      <Link href="/team">
        <StyledLink>This is our team</StyledLink>
      </Link>
    </>
  );
}
