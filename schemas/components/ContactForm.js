  import {defineField, defineType} from 'sanity'

  export const ContactForm = defineType({
    name: 'contactForm', // ✅ matches _type in your POST payload
    title: 'Leads',
    type: 'document',
    fields: [
      defineField({
        name: 'fullname',
        title: 'Full Name',
        type: 'string',
      }),
      defineField({
        name: 'companyname',
        title: 'Company Name',
        type: 'string',
      }),
      defineField({
        name: 'phonenumber',
        title: 'Phone Number',
        type: 'string',
      }),
      defineField({
        name: 'email',
        title: 'Email Address',
        type: 'email',
      }),
      defineField({
        name: 'subject',
        title: 'Subject',
        type: 'string',
      }),
      defineField({
        name: 'message',
        title: 'Message',
        type: 'text',
      }),
      defineField({
        name: 'submittedAt',
        title: 'Submitted At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      }),
      defineField({
        name: 'source',
        title: 'Submitted from',
        type: 'string',
        readOnly: true,
      }),
    ],
  })
