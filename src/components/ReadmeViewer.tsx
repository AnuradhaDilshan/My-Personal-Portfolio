"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";

type Props = {
  url: string;
};

const ReadmeViewer: React.FC<Props> = ({ url }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const rawUrl = url
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
        const res = await fetch(rawUrl);
        const text = await res.text();
        setMarkdown(text);
      } catch (error) {
        setMarkdown("# Error loading README");
      }
    };

    fetchReadme();
  }, [url]);

  const repoBaseUrl = url.split("/blob/")[0];

  const customComponents: Components = {
    a: ({ node, href, ...props }) => {
      const adjustedHref =
        href === "./LICENSE" ? `${repoBaseUrl}/blob/main/LICENSE` : href;

      return (
        <a
          {...props}
          href={adjustedHref}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    },

    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <code {...props} className={`${className} text-white-300`}>
          {children}
        </code>
      ) : (
        <code
          {...props}
          className={`bg-gray-800 text-white-300 rounded-md px-1 ${
            className || ""
          }`}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <div className="markdown-body p-8">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={customComponents}
      />
    </div>
  );
};

export default ReadmeViewer;
