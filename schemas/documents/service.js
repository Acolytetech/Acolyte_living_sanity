import {defineField, defineType} from 'sanity'

export const Services = defineType({
  name: 'services',
  title: 'Service',
  type: 'document',
  groups: [
    {
      title: 'Main',
      name: 'main',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'main',
    },
    {
      name: 'subHeading',
      title: 'Subheading',
      type: 'string',
      group: 'main',
    },
    {
      name: 'serviceBannerImage',
      title: 'Service Banner Image',
      type: 'image',
      group: 'main',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'serviceBannerImageAlt',
      title: 'Service Banner Image Alt',
      type: 'string',
      group: 'main',
    },
    defineField({
      name: 'customScript',
      title: 'Head Script (injected into <head>)',
      type: 'text',
      description: 'For analytics or schema injected in the <head>',
      group: 'seo',
    }),
    defineField({
      name: 'bodyEndScript',
      title: 'Body-End Script (injected before </body>)',
      type: 'text',
      description: 'For chat widgets, trackers, or JS to load at end of page',
      group: 'seo',
    }),
  ],
})
