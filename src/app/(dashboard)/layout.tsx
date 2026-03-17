import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <Link
          href="/agents"
          className="mb-8 block text-xl font-bold text-zinc-900 dark:text-zinc-50"
        >
          Nexus
        </Link>
        <nav className="space-y-1">
          <Link
            href="/agents"
            className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Agents
          </Link>
          <Link
            href="/workflows"
            className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Workflows
          </Link>
        </nav>
      </aside>
      <main className="flex-1 bg-zinc-50 p-8 dark:bg-black">{children}</main>
    </div>
  );
}
