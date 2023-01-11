
// Ths component contain the welcome  information  with image at the background

import { useEffect, useRef } from "react";
import Typed from "typed.js";


const Welcome = () => {
	// Create Ref element.
	const Element = useRef(null);
	   useEffect(() => {
				const typed = new Typed(Element.current, {
					strings: [
						" Welcome to my Portfolio",
						" My Name is Isaiah Clifford",
						"  I am a Web Developer",
						" Full Stack Javascript Developer",
						"  Expertise in the MERN Stack",
					], // Strings to display
					// Speed settings, try different values until you get good results
					startDelay: 100,
					typeSpeed: 50,
					backSpeed: 50,
					backDelay: 100,
					smartBackspace: true,
					loop: true,
					showCursor: true,
					cursorChar: "|",
				});

				// Destroying
				return () => {
					typed.destroy();
				};
			}, []);
	return (
		<>
			<div className="text-center text-BntColor align-middle italic  md:text-5xl font-bold text-3xl  px-20 md:px-10 font-Poppins  py-40">
				<div>
					{/* Element to display typing strings */}
					<span ref={Element}></span>
				</div>
			</div>
		</>
	);
};

export default Welcome;
