import {defineType, defineField} from 'sanity'

export const Service = defineType({
  name: 'servicePage',
  title: 'Service Pages',
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
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'serviceName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'reference',
      to: [{type: 'serviceCategory'}],
      options: {
        disableNew: false,
      },
      group: 'main',
    }),
    defineField({
      name: 'showCta',
      title: 'Show CTA Button?',
      type: 'boolean',
      initialValue: true,
      group: 'main',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call To Action Button',
      type: 'object',
      hidden: ({parent}) => parent?.showCta === false,
      fields: [
        defineField({
          name: 'buttonLabel',
          title: 'Button Label',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        }),
      ],
      group: 'main',
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'main',
    }),
    defineField({
      name: 'coverImageAlt',
      title: 'Cover Image Alt',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'htmlContent',
      title: 'Page Content',
      type: 'array',
      description: 'Add rich HTML content (headings, paragraphs, lists, etc.)',
      of: [{type: 'block'}],
      group: 'main',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoMetaFields',
      group: 'seo',
    }),
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
  preview: {
    select: {
      title: 'serviceName',
      media: 'coverImage',
    },
  },
})
