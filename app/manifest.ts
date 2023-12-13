import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    start_url: ".",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/favicon.ico",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/favicon.ico",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
