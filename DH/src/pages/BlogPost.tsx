import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { blogPosts } from "../data/blog";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div>
      <article>
        <HeroSection post={post} />
        <ContentSection post={post} />
      </article>
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
}

function HeroSection({ post }: { post: typeof blogPosts[0] }) {
  return (
    <section className="relative">
      <div className="relative h-96 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-white hover:text-white/80 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime} read
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentSection({ post }: { post: typeof blogPosts[0] }) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div
              className="space-y-6 text-foreground"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n\n")
                  .map((paragraph) => {
                    if (paragraph.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold mt-12 mb-4">${paragraph.slice(3)}</h2>`;
                    } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return `<p class="font-semibold text-lg mt-8 mb-3">${paragraph.slice(2, -2)}</p>`;
                    } else if (paragraph.startsWith("- ")) {
                      const items = paragraph
                        .split("\n")
                        .filter((line) => line.startsWith("- "))
                        .map((line) => `<li class="ml-6">${line.slice(2)}</li>`)
                        .join("");
                      return `<ul class="list-disc space-y-2 my-4">${items}</ul>`;
                    } else if (/^\d+\./.test(paragraph)) {
                      const items = paragraph
                        .split("\n")
                        .filter((line) => /^\d+\./.test(line))
                        .map((line) => `<li class="ml-6">${line.replace(/^\d+\.\s/, "")}</li>`)
                        .join("");
                      return `<ol class="list-decimal space-y-2 my-4">${items}</ol>`;
                    } else {
                      return `<p class="text-muted-foreground leading-relaxed">${paragraph}</p>`;
                    }
                  })
                  .join(""),
              }}
            />
          </div>

          <div className="flex items-center justify-between pt-12 mt-12 border-t border-border">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <button className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
            <Link
              to="/blog"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              View all articles →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RelatedPosts({ posts }: { posts: typeof blogPosts }) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                  {post.category}
                </span>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
