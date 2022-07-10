import ControlCards from "./components/ControlCards";
import Light from "./assets/Light.svg";
import Trash from "./assets/Trash.svg";
import Music from "./assets/Music.svg";
import Eye from "./assets/Eye.svg";

export default function App() {
	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<div className='w-11/12 lg:w-6/12 p-8 mx-auto glassmorphism font-Mada rounded-sm'>
				<h2 className='mb-2 text-center text-xl font-medium'>
					You are controlling
				</h2>
				<h1 className='font-bold text-3xl lg:text-4xl text-center'>
					Main Lounge & Dining Room
				</h1>
				<div className='flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-center w-full mt-10 mb-8'>
					<img
						className='w-full lg:w-3/5'
						src='https://i.ibb.co/09fmVRK/plan.png'
						alt='Photograph of the house'
					/>
					<div className='grid grid-cols-2 gap-4 lg:gap-6'>
						<ControlCards name='Lights' icon={Light} />
						<ControlCards name='Cleaning' icon={Trash} />
						<ControlCards name='Music' icon={Music}/>
						<ControlCards name='Motion sensor' icon={Eye}/>
					</div>
				</div>
			</div>
		</main>
	);
}
