import {defineType, defineField} from 'sanity'

export const Home = defineType({
  name: 'home',
  title: 'Home',
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
    // Hero Section
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Background image for the hero section.',
      group: 'main',
    }),
    defineField({
      name: 'backgroundImageAlt',
      title: 'Background Image Alt',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main headline text for the hero section.',
      group: 'main',
    }),
    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      description: 'Short subheading text to display below the headline. (Max 500 characters)',
      group: 'main',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call To Action Button',
      type: 'object',
      group: 'main',
      fields: [
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text to display on the button.',
        }),
        defineField({
          name: 'buttonPath',
          title: 'Button Path',
          type: 'string',
          description: 'URL where the button will redirect.',
        }),
      ],
      description: 'Details for the button in the hero section.',
    }),
    defineField({
      name: 'topserviceHeading',
      title: 'Top Service Heading',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'topServices',
      title: 'Top Services',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Service Icon',
              type: 'image',
            }),
            defineField({
              name: 'serviceIconAlt',
              title: 'Service Icon Alt',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Service Link',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Add multiple top services with title, description, icon, and link.',
    }),

    // Testimonials
    defineField({
      name: 'testimonialHeadline',
      title: 'Testimonial Headline',
      type: 'string',
      description: 'Headline for the testimonial section.',
      group: 'main',
    }),
    defineField({
      name: 'testimonialSubheading',
      title: 'Testimonial Subheading',
      type: 'string',
      description: 'Subheading for the testimonial section.',
      group: 'main',
    }),
    defineField({
      name: 'testimonialPoints',
      title: 'Testimonial Points',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add bullet points for testimonials.',
      group: 'main',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'imageAlt',
              title: 'Image Alt',
              type: 'string',
            }),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    // Partners Section
    defineField({
      name: 'partnersHeadline',
      title: 'partners Headline',
      type: 'string',
      description: 'Headline for the partners section.',
      group: 'main',
    }),
    defineField({
      name: 'partners',
      title: 'Our Partners',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'ourpartnerImage',
              title: 'Partner Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'ourpartnerImageAlt',
              title: 'Partner Image Alt',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'List of partners to display in the Partners section.',
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
