// schemas/siteSettings.ts
export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
      // General Website Info
      { name: "siteTitle", title: "Site Title", type: "string", validation: (Rule: any) => Rule.required().max(60) },
      { name: "siteDescription", title: "Site Description", type: "text", rows: 3, validation: (Rule: any) => Rule.required().max(160) },
      { name: "siteKeywords", title: "Site-wide Keywords", type: "array", of: [{ type: "string" }], validation: (Rule: any) => Rule.optional().max(10) },
  
      // Branding & Assets
      { name: "logo", title: "Logo", type: "image", options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
      { name: "favicon", title: "Favicon", type: "image", options: { hotspot: false }, validation: (Rule: any) => Rule.required() },
  
      // Social Media & Open Graph
      { name: "defaultOGImage", title: "Default OG Image", type: "image", options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
      { name: "twitterHandle", title: "Twitter Handle", type: "string", description: "Twitter username (without @)", validation: (Rule: any) => Rule.optional() },
  
      // Analytics & Integrations
      { name: "googleAnalyticsID", title: "Google Analytics ID", type: "string", validation: (Rule: any) => Rule.optional() },
      { name: "googleSiteVerification", title: "Google Site Verification", type: "string", validation: (Rule: any) => Rule.optional() },
  
      // Contact Information
      { name: "contactEmail", title: "Contact Email", type: "string", validation: (Rule: any) => Rule.email().required() },
      { name: "supportEmail", title: "Support Email", type: "string", validation: (Rule: any) => Rule.email().optional() },
      { name: "phone", title: "Contact Phone Number", type: "string", validation: (Rule: any) => Rule.optional() },
  
      // Location & Address (Optional)
      {
        name: "address",
        title: "Business Address",
        type: "object",
        fields: [
          { name: "street", title: "Street", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "state", title: "State", type: "string" },
          { name: "zipCode", title: "Zip Code", type: "string" },
          { name: "country", title: "Country", type: "string" }
        ],
        validation: (Rule: any) => Rule.optional()
      },
  
      // Legal & Compliance
      { name: "privacyPolicyURL", title: "Privacy Policy URL", type: "url", validation: (Rule: any) => Rule.optional().uri({ scheme: ['http', 'https'] }) },
      { name: "termsOfServiceURL", title: "Terms of Service URL", type: "url", validation: (Rule: any) => Rule.optional().uri({ scheme: ['http', 'https'] }) }
    ],
  
    preview: {
      select: {
        title: "siteTitle",
        media: "logo"
      }
    }
  };
  