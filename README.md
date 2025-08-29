# md2jsx

Easily render Markdown content as React components.

## Installation

```bash
npm install md2jsx react react-dom
```

## Usage

### Using the `MdComponent`

```tsx
import React from "react";
import { MdComponent } from "md2jsx";

const markdown = `
# Hello World

This is **Markdown** rendered as React!
`;

export default function App() {
  return <MdComponent content={markdown} />;
}
```

### Using the `md2jsx` function

```tsx
import React from "react";
import { md2jsx } from "md2jsx";

const BlogPost = md2jsx(`
# My Blog Post

Some *Markdown content* here.
`);

export default function App() {
  return <BlogPost />;
}
```

## Features

- Converts raw Markdown strings into React components.
- Supports headings, lists, links, code blocks, and inline formatting.
- Ready to extend with custom component mapping and syntax highlighting.

## Future Enhancements

- Direct `.md` file imports via Vite/Webpack loader.
- Syntax highlighting for code blocks.
- MDX-style JSX support inside Markdown.
- Customizable components for headings, links, and other tags.

## License

MIT
