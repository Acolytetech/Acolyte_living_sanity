import {BiTable} from 'react-icons/bi'
import {BsQuote, BsYoutube} from 'react-icons/bs'
import {
  CiTextAlignCenter,
  CiTextAlignJustify,
  CiTextAlignLeft,
  CiTextAlignRight,
} from 'react-icons/ci'
import {FiExternalLink} from 'react-icons/fi'
import {ImImage, ImTextColor} from 'react-icons/im'
import {defineField, defineType} from 'sanity'
import {TextAlign} from './TextAlign'
import {TextColor} from './TextColor'

export const News = defineType({
  name: 'news',
  title: 'News',
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
      name: 'newsHeading',
      title: 'News Heading',
      type: 'string',
      description: 'Main heading for the hero section',
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'newsHeading',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: 'main',
    }),

      defineField({
          name: 'category',
          title: 'News Category',
          type: 'reference',
          to: [{type: 'newsCategory'}],
          options: {
            
            disableNew: false,
          },

          group: 'main',
        }),
    defineField({
      name: 'newsBannerImage',
      title: 'News Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'main',
    }),
    defineField({
      name: 'newsBannerImageAlt',
      title: 'News Banner Image Alt',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'newsSubHeading',
      title: 'news Subheading',
      type: 'string',
      description: 'Subheading for the hero section',
      group: 'main',
    }),

    // ✅ Multiple blog editors array
    defineField({
      name: 'newsSections',
      title: 'News Sections',
      type: 'array',
      group: 'main',
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'sectionContent',
              title: 'Section Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  title: 'Text',
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                      {title: 'Underline', value: 'underline'},
                      {
                        title: 'Left',
                        value: 'left',
                        icon: CiTextAlignLeft,
                        component: (props) => TextAlign(props),
                      },
                      {
                        title: 'Center',
                        value: 'center',
                        icon: CiTextAlignCenter,
                        component: (props) => TextAlign(props),
                      },
                      {
                        title: 'Justify',
                        value: 'justify',
                        icon: CiTextAlignJustify,
                        component: (props) => TextAlign(props),
                      },
                      {
                        title: 'Right',
                        value: 'right',
                        icon: CiTextAlignRight,
                        component: (props) => TextAlign(props),
                      },
                    ],
                    annotations: [
                      {
                        name: 'textColor',
                        title: 'Text color',
                        type: 'textColor',
                        icon: ImTextColor,
                        component: (props) => TextColor(props),
                      },
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {name: 'Externel_Link', type: 'url'},
                          {name: 'Internal_link', type: 'reference', to: [{type: 'blog'}]},
                          {
                            name: 'href',
                            type: 'url',
                            title: 'Link URL',
                            validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  type: 'image',
                  title: 'Image',
                  icon: ImImage,
                  options: {hotspot: true},
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                    },
                    {
                      name: 'customWidth',
                      type: 'number',
                      title: 'Image Width (%)',
                      initialValue: 100,
                      validation: (Rule) => Rule.min(10).max(100),
                      options: {
                        layout: 'slider',
                        min: 10,
                        max: 100,
                        step: 5,
                      },
                    },
                    {
                      name: 'alignment',
                      type: 'string',
                      title: 'Image Alignment',
                      initialValue: 'center',
                      options: {
                        list: [
                          {title: 'Left', value: 'left'},
                          {title: 'Center', value: 'center'},
                          {title: 'Right', value: 'right'},
                        ],
                        layout: 'radio',
                        direction: 'horizontal',
                      },
                    },
                  ],
                },
                {
                  type: 'object',
                  name: 'table',
                  title: 'Table',
                  icon: BiTable,
                  fields: [
                    {
                      name: 'rows',
                      type: 'array',
                      title: 'Rows',
                      of: [
                        {
                          type: 'object',
                          title: 'Row',
                          fields: [
                            {
                              name: 'cells',
                              type: 'array',
                              title: 'Cells',
                              of: [
                                {
                                  type: 'object',
                                  fields: [
                                    {name: 'text', type: 'string', title: 'Cell Content'},
                                    {name: 'bold', type: 'boolean', title: 'Bold Text'},
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {rows: 'rows'},
                    prepare({rows}) {
                      return {
                        title: 'Table',
                        subtitle: `${rows?.length || 0} row(s)`,
                        media: () => '📊',
                      }
                    },
                  },
                },
                {
                  type: 'object',
                  name: 'video',
                  title: 'YouTube Video',
                  icon: BsYoutube,
                  fields: [
                    {
                      name: 'url',
                      type: 'url',
                      title: 'YouTube URL',
                      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
                    },
                  ],
                  preview: {
                    select: {url: 'url'},
                    prepare({url}) {
                      return {
                        title: 'YouTube Video',
                        subtitle: url,
                        media: () => '🎥',
                      }
                    },
                  },
                },
                {
                  type: 'object',
                  name: 'quote',
                  title: 'Quote',
                  icon: BsQuote,
                  fields: [
                    {name: 'text', type: 'text', title: 'Quote Text'},
                    {name: 'author', type: 'string', title: 'Author'},
                  ],
                  preview: {
    select: {
      title: 'newsHeading',
      subtitle: 'newsSubHeading',
      media: 'newsBannerImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled News',
        subtitle: subtitle || 'No subheading',
        media: media,
      }
    },
  },
                },
                {
                  type: 'object',
                  name: 'externalLink',
                  title: 'External Link',
                  icon: FiExternalLink,
                  fields: [
                    {name: 'label', type: 'string', title: 'Link Label'},
                    {
                      name: 'url',
                      type: 'url',
                      title: 'URL',
                      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
                    },
                  ],
                  preview: {
                    select: {title: 'label', subtitle: 'url'},
                    prepare({title, subtitle}) {
                      return {
                        title: title || 'External Link',
                        subtitle,
                        media: () => '🔗',
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {title: 'sectionTitle'},
            prepare({title}) {
              return {
                title: title || 'Untitled Section',
              }
            },
          },
        },
      ],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      group: 'main',
    }),
    defineField({
      name: 'callToActionbtn',
      title: 'Call To Action Button',
      type: 'object',
      group: 'main',
      fields: [
        {name: 'buttonLabel', title: 'Button Label', type: 'string'},
        {name: 'buttonPath', title: 'Button Path', type: 'string'},
      ],
    }),
    defineField({
      name: 'customScript',
      title: 'Head Script (injected into <head>)',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'bodyEndScript',
      title: 'Body-End Script (injected before </body>)',
      type: 'text',
      group: 'seo',
    }),
  ],
})
