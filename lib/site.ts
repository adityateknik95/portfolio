/**
 * Central site configuration.
 *
 * Every value wrapped in [BRACKETS] is a placeholder you must replace.
 * Search the project for "[" to find them all, or see the README.
 */

export const site = {
  name: "Aditya S G",
  role: "Full-stack engineer building ML-backed systems",
  tagline:
    "Final-year CS engineer building deployable systems across full-stack and applied ML.",
  location: "Bengaluru, India",

  // --- Links / contact ---
  email: "adityateknik95@gmail.com",
  github: "https://github.com/adityateknik95",
  linkedin: "https://www.linkedin.com/in/aditya-s-g-4a354b365",
  resume: "https://drive.google.com/file/d/1LMUnAv3sO3KijoD072pexI_cAd9I9tjL/view?usp=sharing", // [Resume PDF path] — drop your file at public/resume.pdf
} as const;

/**
 * Returns a `mailto:` href, or "#" if the email is still a placeholder.
 * Keeps the CTA from becoming a dead/confusing link before you fill it in.
 */
export function mailtoHref(email: string): string {
  return email.startsWith("[") ? "#" : `mailto:${email}`;
}

/** True while a link is still an unfilled [BRACKET] placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[");
}

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;
