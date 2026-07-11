import { externalUrls, publicContact } from "./config";

export const profile = {
  name: "Tatiana Furtuna",
  brandName: "Tantyastorm",
  role: "Python Developer",
  email: publicContact.email,
  githubUrl: externalUrls.github,
  upworkUrl: externalUrls.upwork,
  linkedinUrl: externalUrls.linkedin,
  fiverrUrl: externalUrls.fiverr,
  canonicalUrl: externalUrls.portfolio,
};

export const contactLinks = [
  {
    label: "Email",
    detail: profile.email,
    icon: "@",
    href: `mailto:${profile.email}`,
    ariaLabel: `Email ${profile.name} at ${profile.email}`,
    isExternal: false,
  },
  {
    label: "GitHub",
    detail: "@tantyastorm",
    icon: "GH",
    href: profile.githubUrl,
    ariaLabel: `${profile.name} on GitHub`,
    isExternal: true,
  },
  {
    label: "Upwork",
    detail: "Freelancer Profile",
    icon: "UP",
    href: profile.upworkUrl,
    ariaLabel: `${profile.name} on Upwork`,
    isExternal: true,
  },
  {
    label: "LinkedIn",
    detail: "Tatiana Furtuna",
    icon: "IN",
    href: profile.linkedinUrl,
    ariaLabel: `${profile.name} on LinkedIn`,
    isExternal: true,
  },
  ...(profile.fiverrUrl
    ? [
        {
          label: "Fiverr",
          detail: "Freelancer Profile",
          icon: "FI",
          href: profile.fiverrUrl,
          ariaLabel: `${profile.name} on Fiverr`,
          isExternal: true,
        },
      ]
    : []),
];
