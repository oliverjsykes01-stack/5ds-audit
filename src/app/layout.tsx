import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
	title: '5 Day Sprint Framework',
	description: 'Starter for 5DSAudit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<header className="border-b">
					<div className="mx-auto flex max-w-6xl items-center justify-between p-4">
						<Link href="/" className="font-semibold">5DSAudit</Link>
						<nav className="flex items-center gap-3">
							<Button asChild variant="ghost"><Link href="/">Home</Link></Button>
							<Button asChild variant="ghost"><Link href="/dashboard">Dashboard</Link></Button>
						</nav>
					</div>
				</header>
				{children}
			</body>
		</html>
	)
}