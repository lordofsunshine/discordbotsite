import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Advertisting",
    short_name: "Advertisting",
    description: "Music, moderation, and useful commands for your Discord server.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3df",
    theme_color: "#f8d44d",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
