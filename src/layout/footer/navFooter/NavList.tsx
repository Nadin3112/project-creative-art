import React from 'react';
import { S } from '../Footer_Styles';

const navsData = [
  {
    title: "Explore",
    items: [
      { link: "Art Sign In" },
      { link: "Collectibles" },
      { link: "Domain Name" },
      { link: "Utility" }
    ],
  },

  {
    title: "Statistic",
    items: [
      { link: "Ranking" },
      { link: "Collectibles" },
      { link: "Activity" }
    ],
  },

  {
    title: "Company",
    items:
      [
        { link: "About Us" },
        { link: "Career" },
        { link: "Support" },
        { link: "Partners" }
      ],
  },

  {
    title: "Resources",
    items:
      [
        { link: "Help Center" },
        { link: "Platform Status" },
        { link: "Blog" }
      ],
  }
]

export const NavList: React.FC = () => {
  return (
    <S.Lists>
      {navsData.map((list, index) => {
        return <S.List key={index}>
          <S.NavTitle>{list.title}</S.NavTitle>
          <ul>
            {list.items.map((item, index) => {
              return <S.NavItem key={index}>
                <S.NavLink
                  href={"#"}>
                  {item.link}
                </S.NavLink>
              </S.NavItem>
            })}
          </ul>
        </S.List>
      })}
    </S.Lists>
  );
};

