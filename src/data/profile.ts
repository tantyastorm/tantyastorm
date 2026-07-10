export const profile = {
  name: "Tatiana Furtuna",
  brandName: "Tantyastorm",
  role: "Python Developer",
  email: "tatiana.furtuna29@gmail.com",
  githubUrl: "https://github.com/tantyastorm",
  upworkUrl: "https://www.upwork.com/freelancers/~01d00e59c6273dc9cf?mp_source=share",
  linkedinUrl: "https://www.linkedin.com/in/tatiana-furtuna/",
  canonicalUrl: "https://tantyastorm.github.io/tantyastorm/",
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
];
