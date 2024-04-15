export default function MenuLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="items-center justify-center gap-4 ">
			<div className="justify-center">
				{children}
			</div>
		</section>
	);
}
