import {defineField, defineType} from 'sanity'

export const Contact = defineType({
  name: 'contact',
  title: 'Contact',
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
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
      group: 'main',
    },
    {
      name: 'contactSubHeading',
      title: 'Contact SubHeading',
      type: 'string',
      group: 'main',
    },
    {
      name: 'contactBannerImage',
      title: 'Contact Banner Image',
      type: 'image',
      group: 'main',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactBannerImageAlt',
      title: 'Contact Banner Image Alt',
      type: 'string',
      group: 'main',
    },
    {
      name: 'contactPageContent',
      title: 'Contact Page Content',
      type: 'string',
      group: 'main',
    },
    {
      name: 'contactPageQuote',
      title: 'Contact Page Quote',
      type: 'array',
      of: [{type: 'string'}],
      group: 'main',
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      group: 'main',
      fields: [
        {
          name: 'contactNumber',
          title: 'Contact Number',
          type: 'string',
        },
        {
          name: 'contactEmail',
          title: 'Contact Email',
          type: 'string',
        },
      ],
    },
    {
      name: 'callToActionBtn',
      title: 'Call To Action Button',
      type: 'object',
      group: 'main',
      fields: [
        {
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        },
        {
          name: 'buttonPath',
          title: 'Button Path',
          type: 'string',
        },
      ],
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
