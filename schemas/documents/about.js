import {defineType, defineField} from 'sanity'

export const About = defineType({
  // Changed from 'export const AboutBanner' to 'export default'
  name: 'about',
  title: 'About',
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
    defineField({
      name: 'aboutBannerBackgroundImage',
      title: 'About Banner Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'main',
    }),
    defineField({
      name: 'aboutBannerBackgroundImageAlt',
      title: 'About Banner Background Image Alt',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'aboutBannerHeadline',
      title: 'About Banner Headline',
      type: 'string',
      description: 'Main headline text for the hero section.',
      group: 'main',
    }),
    defineField({
      name: 'aboutBannerSubheadline',
      title: 'About Banner Subheadline',
      type: 'string',
      description: 'Short subheading text to display below the headline. Can be in string or HTML Format.',
      group: 'main',
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Heading',
      type: 'array',
      of: [{type: 'string'}],
      group: 'main',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [{type: 'string'}],
      group: 'main',
    }),
    //   expertise
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Title',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'expertiseSubtitle',
      title: 'Expertise Subtitle',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'expertisebackgroundImage',
      title: 'Expertise Background Image',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'imageAlt',
              title: 'Image Alt',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'expertiseCards',
      title: 'Expertise Cards',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Card Title', type: 'string'},
            {name: 'description', title: 'Card Description', type: 'text'},
          ],
        },
      ],
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
