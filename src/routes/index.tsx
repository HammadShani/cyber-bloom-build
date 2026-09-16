import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Hammad Iqbal | SEO & Frontend" },
      { name: "description", content: "Portfolio of Muhammad Hammad Iqbal, an SEO, Google Ads and frontend development specialist in Chakwal, Pakistan." },
      { property: "og:title", content: "Muhammad Hammad Iqbal | SEO & Frontend" },
      { property: "og:description", content: "SEO strategy, Google Ads and modern frontend development focused on digital growth." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammad Hammad Iqbal",
        jobTitle: "SEO & Digital Marketing Specialist | Frontend Developer",
        address: { "@type": "PostalAddress", addressLocality: "Chakwal", addressRegion: "Punjab", addressCountry: "Pakistan" },
        email: "mailto:h26291989@gmail.com",
        telephone: "+92 319 2204329",
        sameAs: ["https://www.linkedin.com/in/muhammad-hammad-iqbal-109523326/"],
      }),
    }],
  }),
  component: Portfolio,
});
