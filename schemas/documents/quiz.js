import { MdQuiz } from "react-icons/md";
import { defineType, defineField } from "sanity";

export const Quiz = defineType({
  name: "quiz",
  title: "Quiz",
  type: "document",
  icon: MdQuiz,
  groups: [
    {
      title: "Main",
      name: "main",
      default: true,
    },
    {
      title: "SEO",
      name: "seo",
    },
  ],
  fields: [
    // SEO fields
    defineField({
      title: "SEO",
      name: "seo",
      type: "seoMetaFields",
      group: "seo",
    }),

    // Question (headline itself)
    defineField({
      name: "questionText",
      title: "Quiz Question",
      type: "string",
      description: "Enter the main quiz question.",
      group: "main",
    }),

    // Options with click count
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      group: "main",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "optionText",
              title: "Option Text",
              type: "string",
            },
            {
              name: "clickCount",
              title: "Click Count",
              type: "number",
              initialValue: 0,
            },
          ],
          preview: {
            select: {
              title: "optionText",
              clickCount: "clickCount",
            },
            prepare({ title, subtitle, clickCount }) {
              return {
                title,
                subtitle: `Clicks: ${clickCount}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.length(4), // exactly 4 options
    }),
  ],
});
