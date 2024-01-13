import React from 'react';
import { S } from '../HeaderMenu_Styles';

const navs = [
  { title: "Marketplace",
    href: "#"},
  { title: "Artists",
    href: "#"},
  { title: "Community",
    href: "#"},
  { title: "Collections",
    href: "#"}
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {navs.map((navItem, index) => {
        return <S.MenuItem key={index}>
          <S.NavLink
                      href={navItem.href}>
                      {navItem.title}
          </S.NavLink>
        </S.MenuItem>
      })}
    </ul>
  );
};


