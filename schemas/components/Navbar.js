// schemas/navbar.js
import { defineField, defineType } from "sanity";

export const Navbar = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    // Brand name or logo field
    defineField({
      name: "brand",
      title: "Brand Name",
      type: "string",
      description: "Name of the brand or logo text.",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload the brand logo.",
      options: {
        hotspot: true,
      }
    }),
    // Menu items with nested dropdown and sub-dropdown support
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            // Label for the main menu item
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "The text displayed for this menu item.",
            }),
            
            defineField({
              name: "path",
              title: "Path",
              type: "string",
              description: "path for this link page.",
            }),
          ],
        },
      ],
      description: "Add navigation items and their dropdowns.",
    }),
  ],
});
