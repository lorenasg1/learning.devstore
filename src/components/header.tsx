import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export function Header() {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center gap-5">
				<Link href="/" className="text-2xl font-extrabold text-white">
					devstore
				</Link>

				<Suspense fallback={null}>
					<SearchForm />
				</Suspense>
			</div>
			<div className="flex items-center gap-4">
				<CartWidget />

				<div className="w-px h-4 bg-zinc-700" />

				<Link href="/home" className="flex items-center gap-2 hover:underline">
					<span className="text-sm">Conta</span>
					<Image
						src="https://github.com/lorenasg1.png"
						alt="Sua foto"
						width={24}
						height={24}
						className="h-6 w-6 rounded-full"
					/>
				</Link>
			</div>
		</nav>
	)
}
