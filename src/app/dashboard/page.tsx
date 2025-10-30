export default function DashboardPage() {
	return (
		<main className="min-h-screen p-8">
			<div className="mx-auto max-w-5xl space-y-6">
				<header className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
					<p className="text-gray-600">Starter dashboard page for 5DSAudit.</p>
				</header>
				<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-lg border p-4">
						<h2 className="font-semibold">Getting Started</h2>
						<p className="text-sm text-gray-600">Add widgets and data here.</p>
					</div>
					<div className="rounded-lg border p-4">
						<h2 className="font-semibold">Next Steps</h2>
						<ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
							<li>Connect Supabase</li>
							<li>Add charts/tables</li>
							<li>Style with shadcn/ui later</li>
						</ul>
					</div>
					<div className="rounded-lg border p-4">
						<h2 className="font-semibold">Links</h2>
						<ul className="mt-2 space-y-1 text-sm">
							<li>
								<a className="text-blue-600 underline" href="/">Home</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</main>
	)
}


