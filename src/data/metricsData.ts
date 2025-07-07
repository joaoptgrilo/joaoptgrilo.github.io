// src/data/metricsData.ts
import { IconType } from "react-icons";

export interface MetricItem {
  id: string;
  iconId: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const metricsData: MetricItem[] = [
  {
    id: "experience",
    iconId: "FiBriefcase",
    value: 4.5,
    decimals: 1,
    suffix: "+",
  },
  { id: "lighthouse", iconId: "FiTarget", value: 90, prefix: ">" },
  { id: "traffic", iconId: "FiZap", value: 15, prefix: "~", suffix: "%" },
  { id: "stacks", iconId: "FiCpu", value: 3 },
  { id: "english", iconId: "FiMessageSquare", value: 2 },
  { id: "work", iconId: "FiGlobe", value: 0 },
];
