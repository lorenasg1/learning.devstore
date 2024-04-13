import { api } from '@/data/api'
import type { Product as TProduct } from '@/data/types/product'
import type { Metadata } from 'next'
import Image from 'next/image'

type ProductProps = {
	params: {
		slug: string
	}
}

async function getProduct(slug: string): Promise<TProduct> {
	const response = await api(`/products/${slug}`, {
		next: {
			revalidate: 60 * 60, // 1h,
		},
	})

	const product = await response.json()

	return product
}

export async function generateMetadata({
	params,
}: ProductProps): Promise<Metadata> {
	const product = await getProduct(params.slug)

	return {
		title: product.title,
	}
}

export default async function Product({ params: { slug } }: ProductProps) {
	const product = await getProduct(slug)
	const price = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(product?.price)
	const pricePart = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(product?.price / 12)

	return (
		<div className="relative grid max-h-[860px] grid-cols-3">
			<div className="col-span-2 overflow-hidden">
				<Image
					src={product.image}
					alt={product.description}
					width={1000}
					height={1000}
					quality={100}
					priority
				/>
			</div>

			<div className="flex flex-col justify-center px-12">
				<h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

				<p className="mt-2 leading-relaxed text-zinc-400">
					{product.description}
				</p>

				<div className="mt-8 flex items-center gap-3">
					<span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
						{price}
					</span>
					<span className="text-small text-zinc-400">
						Em 12x sem juros de {pricePart}
					</span>
				</div>

				<div className="mt-8 space-y-4">
					<span className="block font-semibold">
						<div className="flex gap-2">
							<button
								type="button"
								className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-sm font-semibold rounded-full"
							>
								P
							</button>
							<button
								type="button"
								className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-sm font-semibold rounded-full"
							>
								M
							</button>
							<button
								type="button"
								className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-sm font-semibold rounded-full"
							>
								G
							</button>
							<button
								type="button"
								className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 text-sm font-semibold rounded-full"
							>
								GG
							</button>
						</div>
					</span>
				</div>

				<button
					type="button"
					className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
				>
					Adicionar à sacola
				</button>
			</div>
		</div>
	)
}
