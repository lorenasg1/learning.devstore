import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
			<Link
				href="/"
				className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
			>
				<Image
					src="/images/products/moletom-never-stop-learning.png"
					alt="Moletom, na cor preta, escrito Never Stop Learning."
					className="group-hover:scale-105 transition-transform duration-500"
					width={920}
					height={920}
					quality={100}
					priority
				/>

				<div className="absolute bottom-20 right-8 lg:bottom-28 lg:right-28 h-12 flex items-center gap-2 max-w-[300px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
					<span
						title="Moletom Never Stop Learning"
						className="text-sm truncate"
					>
						Moletom Never Stop Learning
					</span>
					<span className="flex h-full text-sm items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
						R$129
					</span>
				</div>
			</Link>

			<Link
				href="/"
				className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
			>
				<Image
					src="/images/products/moletom-ai-side.png"
					alt="Moletom, na cor branca, escrito Come to the AI side."
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
						R$129
					</span>
				</div>
			</Link>

			<Link
				href="/"
				className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
			>
				<Image
					src="/images/products/camiseta-dowhile-2022.png"
					alt="Camiseta, na cor preta, escrito Expand your mind - DoWhile 2022."
					className="group-hover:scale-105 transition-transform duration-500"
					width={920}
					height={920}
					quality={100}
					priority
				/>

				<div className="absolute bottom-18 right-18 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
					<span title="Camiseta DoWhile 2022" className="text-sm truncate">
						Camiseta DoWhile 2022
					</span>
					<span className="flex h-full text-sm items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
						R$129
					</span>
				</div>
			</Link>
		</div>
	)
}
