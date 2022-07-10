export default function ControlCards(props) {
	function OnClick (evt){
		evt.target.classList.toggle('dark');
	}
	return (
		<article className='w-full aspect-square glassmorphism flex flex-col items-center justify-around px-2'>
			<p className='font-Mada text-lg font-medium'>{props.name}</p>
			<img className='w-8 my-1' src={props.icon} alt='' />
			<div onClick={OnClick} className='flex items-center bg-gray-400 h-6 w-12 rounded-full'>
				<span className='bg-white m-1 h-5 w-5 rounded-full dark:translate-x-5 dark:bg-green-300'></span>
			</div>
		</article>
	);
}
