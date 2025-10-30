import Link from 'next/link'
import { getSupabaseClient } from '@/lib/supabaseClient'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
export default async function DashboardPage() {
	const supabase = getSupabaseClient()
	let audits: any[] | null = null
	let error: { message: string } | null = null
	if (supabase) {
		const res = await supabase
			.from('audits')
			.select('id, name, created_at')
			.order('created_at', { ascending: false })
			.limit(10)
		audits = res.data
		error = res.error
	}

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
								<Link className="text-blue-600 underline" href="/">Home</Link>
							</li>
						</ul>
					</div>
					<Card className="sm:col-span-2 lg:col-span-3">
						<CardHeader>
							<CardTitle>Recent Audits</CardTitle>
						</CardHeader>
						<CardContent>
							{error ? (
								<p className="text-sm text-red-600">Failed to load audits: {error.message}</p>
							) : audits && audits.length > 0 ? (
								<ul className="space-y-2">
									{audits.map((a: any) => (
										<li key={a.id} className="flex items-center justify-between rounded border p-2 text-sm">
											<span className="font-medium">{a.name ?? `Audit ${a.id}`}</span>
											<span className="text-gray-500">{new Date(a.created_at).toLocaleString()}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="text-sm text-gray-600">No audits found. Create some rows in the 'audits' table.</p>
							)}
						</CardContent>
					</Card>
				</section>
			</div>
		</main>
	)
}


