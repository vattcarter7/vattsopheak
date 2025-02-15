import { Metadata } from "next"
import { BASE_URL } from "../constants/url"

export function constructMetadata({
  title = "Vatt Sopheak",
  description = "Vatt Sopheak personal contact info",
  image = "/images/vattsopheak.jpeg",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@vattsopheak"
    },
    icons: {
      icon: {
        url: BASE_URL + "/favicon.ico",
      },
      apple: {
        url: BASE_URL + "/apple-touch-icon.png"
      },
    },
    manifest: `/site.webmanifest`,
    metadataBase: new URL(BASE_URL),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}