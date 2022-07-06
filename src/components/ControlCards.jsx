export default function ControlCards(props) {

	// function OnClick (evt){
	// 	evt.target.children.classList.toggle('translate-x-5');
	// }
	return (
		<article className='w-full aspect-square glassmorphism flex flex-col items-center justify-around px-2'>
			<p className='font-Mada text-lg font-medium'>{props.name}</p>
			<img className='w-8 my-1' src={props.icon} alt='' />
			{/* <input className='' type="checkbox" name="Checkbox"/> */}
			{/* <input onClick={OnClick} type='checkbox' className='absolute w-full h-full opacity-0' /> */}
			<input type='checkbox' className='absolute w-full h-full opacity-0' />
			<label className='flex items-center bg-gray-400 h-6 w-12 rounded-full'>
				<div className='bg-white m-1 h-5 w-5 rounded-full'></div>
			</label>
		</article>
	);
}
