import React from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";
import rehypeReact from "rehype-react";

export interface MdProps {
  content: string;
}

export const MdComponent: React.FC<MdProps> = ({ content }) => {
  // Convert markdown to HTML string
  const html = remark().use(remarkHtml).processSync(content).toString();

  // Convert HTML to React elements
  const Component = new rehypeReact({
    createElement: React.createElement
  }).Compiler(html);

  return <>{Component}</>;
};

// Convenience function: generate component from raw string
export function md2comp(content: string): React.FC {
  return () => <MdComponent content={content} />;
}
