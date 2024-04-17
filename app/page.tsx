import BasicFooter from "@/components/footer";
import { title } from "@/components/primitives";

export default function HomePage() {
	return (
		<div>

<video
					className="w-full h-40 object-cover border-b-8 border-black"
					style={{ opacity: 0.75, height: '28vh' }}
					src="./video/almonte1.mp4"
					autoPlay
					poster="./images/poster.png"
					loop
				/>
				<div className="border-t"></div> 


			<div style={{ position: 'relative' }}>
				<img
					className="w-full h-40 object-cover border-b-12 border-t-12 border-black"
					style={{ opacity: 0.75, height: '20vh' }}
					src="./images/p1.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
					style={{

						position: 'absolute',
						top: '50%', // Position the h1 in the middle vertically
						left: '25%', // Position the h1 in the middle horizontally
						transform: 'translate(-50%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2.5rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Menu
				</h1>
			</div>
<div className="border-t"></div>

			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover  border-t-12 border-black border-b-12"
					style={{ opacity: 0.75, height: '20vh' }}
					src="./images/a1.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
					style={{

						position: 'absolute',
						top: '50%', // Position the h1 in the middle vertically
						left: '25%', // Position the h1 in the middle horizontally
						transform: 'translate(-50%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2.5rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Locations
				</h1>
			</div>

			<div className="border-t"></div>



			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-b-12 border-t-12 border-black"
					style={{ opacity: 0.75, height: '20vh' }}
					src="./images/events3.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
					style={{

						position: 'absolute',
						top: '50%', // Position the h1 in the middle vertically
						left: '25%', // Position the h1 in the middle horizontally
						transform: 'translate(-50%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2.5rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Events
				</h1>
			</div>

			<div className="border-t"></div>

			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-b-12 border-t-12 border-black"
					style={{ opacity: 0.75, height: '20vh' }}
					src="./images/c1.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
					style={{

						position: 'absolute',
						top: '50%', // Position the h1 in the middle vertically
						left: '25%', // Position the h1 in the middle horizontally
						transform: 'translate(-50%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2.5rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Catering
				</h1>
			</div>

			<div className="border-t"></div>


<BasicFooter/>

		</div>





	);
}
