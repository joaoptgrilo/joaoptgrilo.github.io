// src/data/metricsData.ts
import { MetricItem } from "./types";

export const metricsData: MetricItem[] = [
  {
    id: "experience",
    iconId: "FiBriefcase",
    value: 5,
    decimals: 0,
  },
  {
    id: "lighthouse",
    iconId: "FiTarget",
    value: 90,
  },
  {
    id: "traffic",
    iconId: "FiZap",
    value: 15,
  },
  {
    id: "stacks",
    iconId: "FiCpu",
    stacks: [{ name: "React" }, { name: ".NET" }, { name: "PHP" }],
  },
  {
    id: "english",
    iconId: "FiMessageSquare",
  },
  {
    id: "work",
    iconId: "FiGlobe",
  },
];
