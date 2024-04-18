import BasicFooter from "@/components/footer";
import { title } from "@/components/primitives";

export default function HomePage() {
	return (
		<div>

<div style={{ position: 'relative' }}>
				<img
					className="w-full h-40 object-cover border-black"
					style={{ opacity: 0.75, height: '40vh' }}
					src="./images/p1.jpg"
					alt="Background Image"
				/>
				<h1
					className={title()}
					style={{

						position: 'absolute',
						top: '40%', // Position the h1 in the middle vertically
						left: '50%', // Position the h1 in the middle horizontally
						transform: 'translate(-50%, -50%)', // Center the h1
						color: 'white', // Text color
						fontSize: '2rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Joes Italian Kitchen
				</h1>
				<div
    style={{
      position: 'absolute',
      top: '60%', // Position the buttons below the subtitle
      left: '50%', // Position the buttons in the middle horizontally
      transform: 'translateX(-50%)', // Center the buttons horizontally
      zIndex: 10, // Ensure it's above the image
    }}
  >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
      Orders
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Reservations
    </button>
  </div>
			</div>










<div style={{ position: 'relative', width: '100%' }}>
  <video
    className="w-full h-40 object-cover border-b-gray-700"
    style={{ opacity: 0.75, height: '35vh' }}
    src="./video/almonte1.mp4"
    poster="./images/a6.png"
    loop
  />
  <h1
    className={title()}
    style={{
      position: 'absolute',
      top: '66%', // Position the h1 vertically
      left: '50%', // Position the h1 in the middle horizontally
      transform: 'translateX(-50%)', // Center the h1 horizontally
      color: 'white', // Text color
      fontSize: '2rem', // Font size
      zIndex: 10, // Ensure it's above the image
    }}
  >
    Joes Italian Kitchen
  </h1>
  {/* <h2
    style={{
      position: 'absolute',
      top: '50%', // Position the subtitle below the title
      left: '50%', // Position the subtitle in the middle horizontally
      transform: 'translateX(-50%)', // Center the subtitle horizontally
      color: 'white', // Text color
      fontSize: '1.5rem', // Font size
      zIndex: 10, // Ensure it's above the image
    }}
  >
    Almonte, Nepean, & Wellington
  </h2> */}
  <div
    style={{
      position: 'absolute',
      top: '33%', // Position the buttons below the subtitle
      left: '50%', // Position the buttons in the middle horizontally
      transform: 'translateX(-50%)', // Center the buttons horizontally
      zIndex: 10, // Ensure it's above the image
    }}
  >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
      Orders
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Reservations
    </button>
  </div>
</div>









			 <div className="border-8 border-black"></div>


			 <a href="/menu" style={{ textDecoration: 'none' }}>
			<div style={{ position: 'relative' }}>
				<img
					className="w-full h-40 object-cover border-black"
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
						fontSize: '2rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Menu
				</h1>
			</div>

			</a>


<div className="border-8 border-black"></div>


<a href="/locations" style={{ textDecoration: 'none' }}>
			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-black"
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
						fontSize: '2rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Locations
				</h1>
			</div>

			</a>

			<div className="border-8 border-black"></div>



			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-black"
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
						fontSize: '2rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Events
				</h1>
			</div>

			<div className="border-8 border-black"></div>

			<div style={{ position: 'relative' }}>
				<img
				className="w-full h-40 object-cover border-black"
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
						fontSize: '2rem', // Font size
						zIndex: 10, // Ensure it's above the image
					}}
				>
					Catering
				</h1>
			</div>

			<div className="border-8 border-black"></div>


<BasicFooter/>

		</div>





	);
}
