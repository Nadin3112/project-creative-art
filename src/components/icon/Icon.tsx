import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
  role?: string
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg aria-hidden={"true"} width={props.width || "25"} height={props.height || "24"} viewBox={props.viewBox || "0 0 25 24"} fill="none" xmlns="http://www.w3.org/2000/svg" >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg >
  );
};
