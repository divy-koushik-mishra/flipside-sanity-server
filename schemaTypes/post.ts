// schemas/blogPost.ts
export default  {
    name: "post",
    title: "Blog Posts",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Post Title",
        type: "string",
        validation: (Rule: any) => Rule.required().max(60)
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "metaDescription",
        title: "Meta Description",
        type: "text",
        rows: 3,
        validation: (Rule: any) => Rule.required().max(160)
      },
      {
        name: "featuredImage",
        title: "Featured Image",
        type: "image",
        options: { hotspot: true },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "altText",
        title: "Image Alt Text",
        type: "string",
        validation: (Rule: any) => Rule.required().max(125)
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: [{ type: "author" }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [{ type: "reference", to: { type: "category" } }],
        validation: (Rule: any) => Rule.required().min(1)
      },
      {
        name: "publishedAt",
        title: "Publish Date",
        type: "datetime",
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "updatedAt",
        title: "Updated Date",
        type: "datetime",
        validation: (Rule: any) => Rule.optional()
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }, { type: "image" }, { type: "code" }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "seoKeywords",
        title: "SEO Keywords",
        type: "array",
        of: [{ type: "string" }],
        validation: (Rule: any) => Rule.required().min(3).max(10)
      },
      {
        name: "openGraph",
        title: "Open Graph (Social Sharing)",
        type: "object",
        fields: [
          {
            name: "ogTitle",
            title: "OG Title",
            type: "string",
            validation: (Rule: any) => Rule.required().max(60)
          },
          {
            name: "ogDescription",
            title: "OG Description",
            type: "text",
            rows: 3,
            validation: (Rule: any) => Rule.required().max(160)
          },
          {
            name: "ogImage",
            title: "OG Image",
            type: "image",
            options: { hotspot: true },
            validation: (Rule: any) => Rule.required()
          }
        ]
      },
      {
        name: "canonicalURL",
        title: "Canonical URL",
        type: "url",
        description: "Set canonical URL if content is duplicated elsewhere",
        validation: (Rule: any) => Rule.uri({ scheme: ['http', 'https'] }).optional()
      },
      {
        name: "isFeatured",
        title: "Feature this post?",
        type: "boolean",
        initialValue: false
      }
    ],
  
    preview: {
      select: {
        title: "title",
        author: "author.name",
        media: "featuredImage",
        publishedAt: "publishedAt"
      },
      prepare(selection: any) {
        const { title, author, media, publishedAt } = selection;
        const date = publishedAt ? new Date(publishedAt).toDateString() : "Unpublished";
        return {
          title,
          subtitle: `${author} | ${date}`,
          media
        };
      }
    }
  };
  