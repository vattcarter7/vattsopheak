import { Metadata } from "next"

export function constructMetadata({
  title = "Vatt Sopheak",
  description = "Vatt Sopheak personal contact info",
  image = "/images/vattsopheak.jpeg",
  icons = "/icons/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
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
    icons,
    metadataBase: new URL('https://www.vattsopheak.com'),
    alternates: {
      media: {
        URL: "https://www.vattsopheak.com/icons/favicon.ico"
      },
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}