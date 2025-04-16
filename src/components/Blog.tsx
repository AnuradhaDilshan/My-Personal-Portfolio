"use client";

import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

interface BlogItem {
  title: string;
  link: string;
  content: string;
  pubDate: string;
  categories: string[];
}

interface RSSResponse {
  items: BlogItem[];
}

const Blog: React.FC = () => {
  const rss2json =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40anuradha.dilshan";
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetch(rss2json)
      .then((res) => res.json())
      .then((data: RSSResponse) => {
        const filtered = data.items.filter(
          (item) => item.categories.length > 0
        );
        setBlogs(filtered);
      });
  }, []);

  const extractImage = (html: string): string => {
    const match = html.match(/<img[^>]+src="?([^"\s]+)"?[^>]*>/);
    return match?.[1] || "/placeholder.jpg";
  };

  const transformedBlogs = blogs.map((blog) => ({
    quote: blog.title,
    name: new Date(blog.pubDate).toLocaleDateString(),
    title: "Read Blog",
    image: extractImage(blog.content),
    link: blog.link,
  }));

  return (
    <section id="blog" className="py-20">
      <h1 className="heading">
        My <span className="text-purple-500">Blog</span>
      </h1>

      <div className="flex flex-col items-center -mt-10 -mb-30">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={transformedBlogs}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
