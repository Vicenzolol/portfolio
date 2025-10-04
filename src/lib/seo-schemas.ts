/**
 * @fileoverview Dados estruturados adicionais para SEO
 * @description Este arquivo contém schemas JSON-LD adicionais para melhor indexação
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#person",
  name: "Vicenzo de Almeida Prucoli",
  alternateName: "Vicenzo Prucoli",
  image: "https://portfolio-vicenzo-prucoli.vercel.app/favicon/android-chrome-512x512.png",
  url: "https://portfolio-vicenzo-prucoli.vercel.app",
  jobTitle: "Desenvolvedor Full Stack",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Laravel",
    "PHP",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "MariaDB",
    "PostgreSQL",
    "SQL",
    "Git",
    "Docker",
    "Apache",
    "cPanel",
    "Full Stack Development",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Responsive Design",
    "API Development",
    "Database Design",
  ],
  knowsLanguage: ["pt-BR", "en"],
  email: "vicenzo.alp@gmail.com",
  telephone: "+55-28-99999-0317",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muqui",
    addressRegion: "ES",
    postalCode: "29480-000",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Instituto Federal do Espírito Santo",
    sameAs: "https://www.ifes.edu.br/",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cachoeiro de Itapemirim",
      addressRegion: "ES",
      addressCountry: "BR",
    },
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Bacharelado em Sistemas de Informação",
      educationalLevel: "Bachelor's Degree",
      credentialCategory: "degree",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Cybersecurity Essentials",
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Cisco Network Academy",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Network Security 1.0",
      credentialCategory: "certificate",
      recognizedBy: {
        "@type": "Organization",
        name: "Cisco Network Academy",
      },
    },
  ],
  sameAs: [
    "https://github.com/Vicenzolol",
    "https://linkedin.com/in/vicenzo-almeida/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#website",
  url: "https://portfolio-vicenzo-prucoli.vercel.app",
  name: "Vicenzo Prucoli - Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Vicenzo de Almeida Prucoli, desenvolvedor full stack especializado em React, Next.js, Laravel e tecnologias web modernas.",
  publisher: {
    "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#person",
  },
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://portfolio-vicenzo-prucoli.vercel.app/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#webpage",
  url: "https://portfolio-vicenzo-prucoli.vercel.app",
  name: "Vicenzo Prucoli | Desenvolvedor Full Stack - Portfolio",
  isPartOf: {
    "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#website",
  },
  about: {
    "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#person",
  },
  description:
    "Portfólio profissional com projetos, experiências e habilidades em desenvolvimento web full stack.",
  inLanguage: "pt-BR",
  potentialAction: [
    {
      "@type": "ContactAction",
      target: "https://portfolio-vicenzo-prucoli.vercel.app/#contact",
    },
  ],
};

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2024-01-01T00:00:00+00:00",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#person",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://portfolio-vicenzo-prucoli.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Sobre",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Habilidades",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#skills",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Projetos",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#projects",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Experiência",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#experience",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Educação",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#education",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Contato",
      item: "https://portfolio-vicenzo-prucoli.vercel.app/#contact",
    },
  ],
};

/**
 * Função para gerar schema de projeto individual
 */
export function createProjectSchema(project: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  technologies: string[];
  dateCreated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    author: {
      "@id": "https://portfolio-vicenzo-prucoli.vercel.app/#person",
    },
    keywords: project.technologies.join(", "),
    dateCreated: project.dateCreated,
    inLanguage: "pt-BR",
  };
}

/**
 * Todos os schemas combinados para a página principal
 */
export const allSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    profilePageSchema,
    breadcrumbSchema,
  ],
};
