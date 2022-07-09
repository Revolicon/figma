/*
* Type List
* */
type IconStyle =
  | 'line'
  | 'solid'
  | 'brand'


/*
* Interface List
* */
interface IconProps {
  slug: string;
  style: IconStyle;
  version: string;
  size?: number;
  color?: string;
  overlay?: number;
  svg?: string;
}

interface ParameterObject {
  name: string
  data?: any
  icon?: string
}
