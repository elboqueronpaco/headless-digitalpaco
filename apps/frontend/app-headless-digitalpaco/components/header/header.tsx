import React from 'react';
import { StyledHeader, ContainerHeader, Logo, Panel, Menu } from './header.style'
import Link from 'next/link'

/* eslint-disable-next-line */
export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <Logo>Headless CMS</Logo>
        <Panel>
          <Menu>
            <ul>
              <li>
                <Link href='/'>Inicio</Link>
              </li>
            </ul>
          </Menu>
          <Menu>
            <ul>
              <li>
                <Link href='/users/signup'>SignUp</Link>
              </li>
              <li>
                <Link href='/users/signin'>SignIn</Link>
              </li>
            </ul>
          </Menu>
        </Panel>
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
