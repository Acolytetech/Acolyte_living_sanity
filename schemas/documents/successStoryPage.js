import {defineType, defineField} from 'sanity'

const successStoryPage = defineType({
  name: 'successStoryPage',
  title: 'Success Story Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // disables "create" and "delete"
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
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'bannerSecondaryTitle',
      title: 'Banner Secondary Title',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'bannerContent',
      title: 'Banner Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'bannerImageAlt',
      title: 'Banner Image Alt',
      type: 'string',
      group: 'main',
    }),

    // ✅ SEO Fields (same as your `servicePage`)
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
})

export default successStoryPage
