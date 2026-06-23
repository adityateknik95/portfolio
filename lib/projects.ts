/**
 * Featured projects — the centerpiece of the page.
 *
 * Link fields can be either a real URL or a [BRACKET] placeholder.
 * The ProjectCard renders placeholders as muted, non-clickable pills
 * (no dead links), and shows a "Demo coming soon" state when no live
 * demo/video URL is set yet.
 */

export type ProjectLinks = {
  /** Live, interactive deployment. */
  demo?: string;
  /** Recorded walkthrough — preferred when a live demo isn't practical. */
  video?: string;
  /** Source repository. */
  github?: string;
  /** Optional deep-dive / blog post. */
  writeup?: string;
};

export type Project = {
  id: string;
  title: string;
  /** One-line hook: what it does + why it's interesting. */
  hook: string;
  /** 2–3 sentences: problem → approach → outcome. */
  detail: string;
  tech: string[];
  links: ProjectLinks;
};

export const projects: Project[] = [
  {
    id: "skywatch",
    title: "SkyWatch",
    hook: "Catches spoofed and falsified aircraft positions in live air-traffic data.",
    detail:
      "Aircraft broadcast their position over ADS-B, an unauthenticated protocol that's trivial to spoof. SkyWatch ingests live feeds from the OpenSky Network and flags physically implausible trajectories — impossible jumps, kinematic violations, and inconsistent multilateration — to surface likely spoofing in real time. The result is a streaming anomaly pipeline that scores flights as they fly rather than after the fact.",
    tech: ["Python", "FastAPI", "OpenSky API", "NumPy", "pandas", "scikit-learn"],
    links: {
      demo: "https://skywatch-six.vercel.app",
      github: "https://github.com/adityateknik95/skywatch",
      writeup: "[SkyWatch writeup URL — optional]",
    },
  },
  {
    id: "perspective",
    title: "Perspective",
    hook: "A rating-free film journal that files what you write under emotional “lenses,” not stars.",
    detail:
      "Star ratings flatten a film into one number and lose whatever actually stayed with you. Perspective drops ratings entirely — you journal each film through one of 18 thematic lenses (grief, memory, craft, politics, solitude) and build a personal archive of how you watched over time. The result is a writing-first record organized by feeling rather than score.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    links: {
      demo: "https://perspective-ochre.vercel.app",
      github: "https://github.com/adityateknik95/perspective",
    },
  },
  {
    id: "pursuit-evasion-rl",
    title: "Pursuit-Evasion RL Simulation",
    hook: "A PPO agent trained to chase and evade, streamed into a live 3D view.",
    detail:
      "Pursuit-evasion is a classic control problem where naive heuristics break down against an adaptive opponent. I trained a PPO policy on the pursuit-evasion dynamics and wired the running simulation to a browser via WebSockets, rendering agent and target in real time with Three.js. The result is an interactive sandbox where you can watch learned strategies emerge and probe how the policy reacts to different starting states.",
    tech: ["Python", "PPO", "FastAPI", "WebSockets", "React", "Three.js"],
    links: {
      video: "[Pursuit-Evasion demo video URL]",
      github: "[Pursuit-Evasion GitHub repo URL]",
      writeup: "[Pursuit-Evasion writeup URL — optional]",
    },
  },
  {
    id: "admin-night",
    title: "Admin Night",
    hook: "Makes boring admin social — friends join live rooms to clear bills and paperwork side by side, with synced boards, chat, and an AI hype companion.",
    detail:
      "Routine admin — bills, subscriptions, paperwork — is dull enough that it gets put off for weeks. Admin Night turns it into a shared session: users spin up real-time rooms where a Kanban board and chat stay perfectly in sync across every member over WebSockets, while an AI companion, Nova, nudges and celebrates each completed task. I built the whole stack end to end — UI, real-time API, Postgres schema, and a split Vercel + Render + Neon deployment — with room-level authorization and proper cross-domain auth (rotating refresh tokens in HttpOnly cookies).",
    tech: ["React 19", "Node.js", "Express", "Socket.IO", "PostgreSQL", "JWT"],
    links: {
      demo: "https://admin-night-ops.vercel.app",
      github: "https://github.com/adityateknik95/admin-night",
    },
  },
];
