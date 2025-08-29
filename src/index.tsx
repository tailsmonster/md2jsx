import React, { useEffect, useState } from "react";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";

// Props for MdComponent
export interface MdProps {
  content?: string; // optional
}

export const MdComponent: React.FC<MdProps> = ({ content }) => {
  const [mdToRender, setMdToRender] = useState<string | null>(content ?? null);

  // If no content passed, dynamically load the default Markdown
  useEffect(() => {
    if (!content) {
      import("../test/example-article.md")
        .then((module) => setMdToRender(module.default))
        .catch(() => setMdToRender("# Default article not found"));
    }
  }, [content]);

  if (!mdToRender) return <div>Loading...</div>;

  // Convert Markdown -> HAST -> React elements
  const Component = remark()
    .use(remarkRehype)
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(mdToRender).result as React.ReactNode;

  return <>{Component}</>;
};

// Convenience function: generate a component from raw Markdown string
export function md2comp(content?: string): React.FC {
  return () => <MdComponent content={content} />;
}