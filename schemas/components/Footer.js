
import { defineType, defineField } from "sanity";

export const Footer = defineType({
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
      defineField({
        name: 'title',
        type: 'string',
        title: 'Schema Title',
      }),
      // Navigation Links
      defineField({
        name: 'quickLinks',
        type: 'array',
        title: 'Quick Links',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'linkTitle',
                type: 'string',
                title: 'Link Title',
              },
              {
                name: 'linkPath',
                type: 'string',
                title: 'Link Path',
              },
            ],
          },
        ],
      }),
      // Contact Information
      {
        name: 'contactInformation',
        type: 'object',
        title: 'Contact Information',
        fields: [
          defineField({
            name: 'contactEmail',
            type: 'email',
            title: 'Contact Email Address',
          }),
          defineField({
            name: 'contactNumber',
            type: 'string',
            title: 'Contact Number',
          }),
          defineField({
            name: 'contactAddress',
            type: 'string',
            title: 'Contact Address',
          }),
        ],
      },
      // Social Media Links
      {
        name: 'socialMedia',
        type: 'array',
        title: 'Social Media Links',
        of: [
          {
            type: 'object',
            fields: [
              defineField({
                name: 'platformName',
                type: 'string',
                title: 'Platform Name',
              }),
              defineField({
                name: 'platformUrl',
                type: 'url',
                title: 'Profile URL',
              }),
            ],
          },
        ],
      },
    ],
  });
