import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/blog/articles";

export const metadata: Metadata = {
  title: "Blog - Nexus",
  description:
    "Learn how AI agents are transforming small businesses. Guides, case studies, and cost comparisons for SME automation.",
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <nav className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-lg dark:border-zinc-800/60 dark:bg-black/80">
        <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto w-full">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 dark:text-zinc-50"
          >
            Nexus
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-8 py-16 w-full">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Blog
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Guides and insights on AI automation for small businesses.
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Link href={`/blog/${article.slug}`} className="group">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {article.metaDescription}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-8 py-8 flex items-center justify-between">
          <span className="text-sm text-zinc-500">
            Nexus. AI-powered business automation.
          </span>
          <span className="text-sm text-zinc-400">Early Access 2026</span>
        </div>
      </footer>
    </div>
  );
}
