import chooseIcon from './choose-icon.js';

export default function Icon({ type, height, width, fill }) {
  const IconComponent = chooseIcon(type);
  if (IconComponent === undefined) return null;
  return <IconComponent height={height} width={width} fill={fill} />;
}
