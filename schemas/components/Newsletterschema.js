import {defineField, defineType} from 'sanity'

export const Newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter Subscriptions',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'email',
      options: {
        isUnique: true,
      },
    }),

    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'subscribedAt',
    },
  },
})
