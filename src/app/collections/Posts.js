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
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};
