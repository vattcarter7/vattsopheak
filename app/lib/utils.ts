import { Metadata } from "next"

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
        url: "https://www.vattsopheak.com/favicon.ico",
      },
      apple: {
        url: "https://www.vattsopheak.com/apple-touch-icon.png"
      },
    },
    themeColor: "#ffffff",
    manifest: `https://www.vattsopheak.com/site.webmanifest`,
    metadataBase: new URL('https://www.vattsopheak.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}