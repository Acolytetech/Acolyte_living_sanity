export default {
  name: 'successStory',
  title: 'Success Stories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandLogo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'brandLogoAlt',
      title: 'Banner Image Alt',
      type: 'string',
    },
    {
      name: 'serviceRef',
      title: 'Linked Service',
      type: 'reference',
      to: [{type: 'servicePage'}],
      description: 'Select a service that this success story relates to',
      validation: (Rule) => Rule.required(),
    },
  ],
}
