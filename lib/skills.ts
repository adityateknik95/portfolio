/** Grouped, scannable skills — no proficiency bars, no logo wall. */

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "WebSockets", "REST"],
  },
  {
    title: "ML / Data",
    items: ["PyTorch", "scikit-learn", "Reinforcement Learning (PPO)", "NumPy", "pandas", "OpenCV"],
  },
  {
    title: "Tools & Infra",
    items: ["Git", "Docker", "Vercel", "Linux", "Supabase", "GitHub Actions"],
  },
];
