import {defineType, defineField} from 'sanity'

export const ServiceCategory = defineType({
  name: 'serviceCategory',
  title: 'Service Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (used for URLs)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    }),
    defineField({
      name: 'image',
      title: 'Preview Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'previewImageAlt',
      title: 'Preview Image Alt',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services in this Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'servicePage'}]}],
      description: 'Manually select which services belong to this category',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
