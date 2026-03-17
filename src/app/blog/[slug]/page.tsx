import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticleBySlug } from "@/lib/blog/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} - Nexus Blog`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

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
              href="/blog"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Blog
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
        <Link
          href="/blog"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span>{article.author}</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div
            className="prose prose-zinc dark:prose-invert max-w-none
              prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-7 prose-p:text-zinc-700 dark:prose-p:text-zinc-300
              prose-li:text-zinc-700 dark:prose-li:text-zinc-300
              prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50
              prose-table:text-sm
              prose-th:text-left prose-th:py-2 prose-th:px-3 prose-th:bg-zinc-100 dark:prose-th:bg-zinc-800
              prose-td:py-2 prose-td:px-3 prose-td:border-t prose-td:border-zinc-200 dark:prose-td:border-zinc-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        <div className="mt-16 rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            Ready to put AI to work?
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            Deploy your first AI agent team today. Free to start.
          </p>
          <Link
            href="/register"
            className="inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started Free
          </Link>
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
