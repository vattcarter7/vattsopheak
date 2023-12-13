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
      icon: 'https://www.vattsopheak.com/icons/favicon.ico',
      shortcut: 'https://www.vattsopheak.com/icons/favicon.ico',
      apple: 'https://www.vattsopheak.com/icons/favicon.ico',
    },
    metadataBase: new URL('https://www.vattsopheak.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}