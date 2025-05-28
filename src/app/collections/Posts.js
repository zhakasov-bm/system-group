export const Posts = {
  slug: "posts",
  access: {
    read: () => true, // Make posts publicly readable
    edit: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },
  ],
};
