export default function LocationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center text-underline justify-start">
				{children}
			</div>
		</section>
	);
}