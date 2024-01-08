import { theme } from "../../../styles/Theme"

type FontPropsType = {
  family?: string,
  weight?: number,
  color?: string,
  lineHeight?: number,
  Fmin?: number,
  Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
  font-family: ${family || "Inter"};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.primaryFont};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 375px)/(1512 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);

`
