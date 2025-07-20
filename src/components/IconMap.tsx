// src/components/IconMap.tsx
// "server-only"; <-- REMOVED THIS LINE

import {
  FiBriefcase,
  FiTarget,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";

const iconMap = {
  FiBriefcase,
  FiTarget,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiGlobe,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconId: keyof typeof iconMap;
  className?: string;
}

const Icon = ({ iconId, className, ...props }: IconProps) => {
  const IconComponent = iconMap[iconId];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} {...props} />;
};

export default Icon;
