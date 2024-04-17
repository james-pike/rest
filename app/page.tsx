import { title } from "@/components/primitives";

export default function HomePage() {
	return (
		<div>
		<div style={{ position: 'relative' }}>
		<img
		  className="w-full h-40 object-cover border-b"
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
			fontSize: '3rem', // Font size
			zIndex: 10, // Ensure it's above the image
		  }}
		>
		  Menu 
		</h1>
	  </div>



	  <div style={{ position: 'relative' }}>
		<img
		  className="w-full h-40 object-cover border-b"
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
			fontSize: '3rem', // Font size
			zIndex: 10, // Ensure it's above the image
		  }}
		>
		  Locations 
		</h1>

		


	  </div>



	  
	  </div>




	  
	);
}
