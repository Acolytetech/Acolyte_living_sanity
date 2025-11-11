// ./schemas/plugins/seoMetaFields.ts
import {defineField, defineType} from 'sanity'

export const seoMetaFields = defineType({
  name: 'seoMetaFieldss',
  title: 'SEO Meta Fields',
  type: 'object',
  groups: [
    {name: 'meta', title: 'Meta'},
    {name: 'openGraph', title: 'Open Graph'},
    {name: 'twitter', title: 'Twitter'},
  ],
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'meta',
    }),
    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      group: 'openGraph',
    }),
    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'text',
      group: 'openGraph',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
      group: 'openGraph',
    }),
    defineField({
      name: 'previewImageAlt',
      title: 'Preview Image Alt',
      type: 'string',
      group: 'openGraph',
    }),
    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      group: 'twitter',
    }),
    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'text',
      group: 'twitter',
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
      group: 'twitter',
    }),
        defineField({
      name: 'twitterImageAlt',
      title: 'Twitter Image Alt',
      type: 'string',
      group: 'twitter',
    }),
  ],
})
