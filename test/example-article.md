# My First Blog Post

Welcome to my **Markdown-powered blog** using `md2comp`!

## Introduction

This is an example blog post. You can write:

- Headings
- Lists
- **Bold** text
- *Italic* text
- [Links](https://example.com)
- `Inline code`

## Code Example

```javascript
console.log("Hello, md2comp!");
```

## Conclusion

Now you can render this Markdown as a React component easily!


---

### How to save it locally

1. Copy the text above.
2. Create a new file in your project folder:  
   `md2comp/test/example-article.md`
3. Paste the contents and save.
4. You can then import it in your React code:

```ts
import { MdComponent } from "md2comp";
import article from "./test/example-article.md";

export default function App() {
  return <MdComponent content={article} />;
}
