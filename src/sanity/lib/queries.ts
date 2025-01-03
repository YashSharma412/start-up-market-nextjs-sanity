import { defineQuery } from "next-sanity";

export const STARTUPS_QUERRY = defineQuery(`
  *[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    category,
    slug,
    _createdAt,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    image
}
  `)