import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const MenuContainer = styled.div`
  /* height: 100%; */
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  border-bottom: ${(props) =>
    props.active ? "2px solid var(--c-primary);" : "none"};
  padding: 26px 16px;
  a {
    color: ${(props) => (props.active ? "var(--c-primary)" : "var(--c-text)")};
    font-weight: ${(props) => (props.active ? "600" : "400")};

    &:hover {
      font-weight: 600;
    }
  }

  @media (max-width: 576px) {
    padding: 15px 12px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 576px) {
    order: -1;
  }
`;

export const Logo = styled.img`
  width: 32px;
`;

export const CartIcon = styled.img`
  width: 20px;
`;
