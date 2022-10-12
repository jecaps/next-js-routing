import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
        <Link href="/team">
          <a>Team</a>
        </Link>
        <Link href="/account">
          <a>Account</a>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
