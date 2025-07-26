// src/components/IconMap.tsx

import {
  FiBriefcase,
  FiTarget,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";

// Use a named export for the map
export const iconMap = {
  FiBriefcase,
  FiTarget,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiGlobe,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconId: keyof typeof iconMap; // This type is now correctly derived
  className?: string;
}

// Use a default export for the component
const Icon = ({ iconId, className, ...props }: IconProps) => {
  const IconComponent = iconMap[iconId];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} {...props} />;
};

export default Icon;
