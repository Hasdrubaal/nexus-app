export default function WorkflowsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Workflows
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Automate multi-step processes with agent workflows
          </p>
        </div>
        <button className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200">
          New Workflow
        </button>
      </div>
      <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-zinc-500 dark:text-zinc-400">
          No workflows yet. Create agents first, then build workflows to connect
          them.
        </p>
      </div>
    </div>
  );
}
