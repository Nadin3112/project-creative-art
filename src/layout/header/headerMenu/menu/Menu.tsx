import React from 'react';
import { S } from '../HeaderMenu_Styles';

const items = [
  { title: "Marketplace",
    href: "marketplace"},
  { title: "Artists",
    href: "artists"},
  { title: "Community",
    href: "community"},
  { title: "Collections",
    href: "collections"}
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return <S.MenuItem key={index}>
          <S.NavLink
                      to={item.href}
                      activeClass="active"
                      smooth={true}
                      spy={true}>
                      {item.title}
          </S.NavLink>
        </S.MenuItem>
      })}
    </ul>
  );
};


