export const Posts = {
  slug: 'posts',
  access: {
    read: () => true, // Make posts publicly readable
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
      required: true,
    },
  ],
};