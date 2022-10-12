import Link from "next/link";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/">
          <StyledNavLink active={pathname === "/"}>Home</StyledNavLink>
        </Link>
        <Link href="/product">
          <StyledNavLink active={pathname === "/product"}>
            Product
          </StyledNavLink>
        </Link>
        <Link href="/team">
          <StyledNavLink active={pathname === "/team"}>Team</StyledNavLink>
        </Link>
        <Link href="/account">
          <StyledNavLink active={pathname === "/account"}>
            Account
          </StyledNavLink>
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
