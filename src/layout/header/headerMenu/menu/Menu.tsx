import React from 'react';
import { S } from '../HeaderMenu_Styles';

const items = [
  { title: "Marketplace"},
  { title: "Artists"},
  { title: "Community"},
  { title: "Collections"}
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return <S.MenuItem key={index}>
          <S.NavLink 
                      href={"#"}>
                        {item.title}
          </S.NavLink>
        </S.MenuItem>
      })}
    </ul>
  );
};


