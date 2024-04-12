import { api } from '@/data/api'
import type { Product } from '@/data/types/product'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
	try {
		const response = await api('/products/featured', {
			next: {
				revalidate: 60 * 60, // 1h,
			},
		})
		const products = await response.json()

		return products
	} catch (error) {
		console.error(error)
		return []
	}
}

export default async function Home() {
	const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

	return (
		<div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
			<Link
				href={`/products/${highlightedProduct.slug}`}
				className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
			>
				<Image
					src={highlightedProduct.image}
					alt={highlightedProduct.description}
					className="group-hover:scale-105 transition-transform duration-500"
					width={920}
					height={920}
					quality={100}
					priority
				/>

				<div className="absolute bottom-20 right-8 lg:bottom-28 lg:right-28 h-12 flex items-center gap-2 max-w-[300px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
					<span title={highlightedProduct.title} className="text-sm truncate">
						{highlightedProduct.title}
					</span>
					<span className="flex h-full text-sm items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
						{formatPrice(highlightedProduct.price)}
					</span>
				</div>
			</Link>

			{otherProducts?.map((product) => (
				<Link
					key={product.slug}
					href={product.slug}
					className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
				>
					<Image
						src={product.image}
						alt={product.description}
						className="group-hover:scale-105 transition-transform duration-500"
						width={920}
						height={920}
						quality={100}
						priority
					/>

					<div className="absolute bottom-18 right-18 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
						<span
							title="Moletom Come to the AI side"
							className="text-sm truncate"
						>
							Moletom Come to the AI side
						</span>
						<span className="flex h-full text-sm items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
							{formatPrice(product.price)}
						</span>
					</div>
				</Link>
			))}
		</div>
	)
}
