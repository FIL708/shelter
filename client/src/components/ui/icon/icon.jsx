import chooseIcon from './choose-icon.js';

export default function Icon({ type, size, fill }) {
  const IconComponent = chooseIcon(type);
  if (IconComponent === undefined) return null;
  return <IconComponent height={size} width={size} fill={fill} />;
}
