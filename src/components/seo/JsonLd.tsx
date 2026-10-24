import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#shravani-sutar`,
        name: siteConfig.name,
        alternateName: ["Shravani", "Shravani Sutar Designer"],
        jobTitle: "Product Designer & UI/UX Designer",
        description: siteConfig.description,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        email: siteConfig.author.email,
        telephone: siteConfig.author.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.author.address.addressLocality,
          addressRegion: siteConfig.author.address.addressRegion,
          addressCountry: siteConfig.author.address.addressCountry,
          postalCode: siteConfig.author.address.postalCode,
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Tilak University",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Belapur, Navi Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        sameAs: [
          siteConfig.author.socials.linkedin,
          siteConfig.url,
        ],
        knowsAbout: [
          "Product Design",
          "UI/UX Design",
          "Visual Design",
          "Design Systems",
          "Brand Identity",
          "Art Direction",
          "Typography",
          "Illustration",
          "A/B Testing",
          "User Behavior Research",
          "Figma",
          "Adobe Creative Cloud",
          "Blender 3D",
          "E-commerce Design",
          "0-1 Digital Products",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Product Designer",
          occupationalCategory: "27-1024.00",
          skills: "User Interface Design, User Experience Architecture, Visual Systems, Prototyping",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#shravani-sutar`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#shravani-sutar`,
        },
        mainEntity: {
          "@id": `${siteConfig.url}/#shravani-sutar`,
        },
        description: siteConfig.description,
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#projects-list`,
        name: "Featured Design Projects by Shravani Sutar",
        description: "Portfolio of selected digital product design, brand identity, and UI/UX case studies",
        numberOfItems: siteConfig.projects.length,
        itemListElement: siteConfig.projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            headline: project.tagline,
            description: project.description.join(" "),
            creator: {
              "@id": `${siteConfig.url}/#shravani-sutar`,
            },
            keywords: project.tags.join(", "),
            dateCreated: project.date,
            url: project.liveUrl || project.link || siteConfig.url,
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        name: "Frequently Asked Questions about Shravani Sutar",
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
