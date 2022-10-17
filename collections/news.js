const news = {
    name: "news",
    label: "News",
    label_singular: "News Item",
    folder: "/content/news-clippings",
    preview_path: "/news/",
    create: true,
    editor: { preview: false },
  
    fields: [
      {label: "Title", name: "title", widget: "string"},
      {label: "Excerpt", name: "excerpt", widget: "text" },
      {label: "Publish Date", name: "date", widget: "date" },
      {label: 'Link', name: 'link', widget: 'string', required: false },
      {label: "Thumbnail", name: "thumbnail", widget: "image", required: false },
      {label: "Thumbnail Alt", name: "thumbnail_alt", widget: "string", required: false}
    ]
  
  }
  
  export default news