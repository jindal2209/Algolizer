import './home.css'

function Box(props) {
	var title = props.title
	var link = props.link
	var text = props.text
	return (
		<div className='col-3'>
			<div className='flip-box'>
				<div className='flip-box-inner'>
					<div className='flip-box-front'>
						{title}
					</div>
					<div className='flip-box-back'>
						<div>
							<div className='backText'>
								{text}
							</div>
							<br />
							<a
								href={`${link}`}
								target='_blank'
								rel='noreferrer'
								className='viewLink'
							>
								View
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Home() {
	return (
		<div className='middle'>
			<div className='row'>
				<Box
					title='Sorting Algorithms (Arrays)'
					link='https://jindal2209.github.io/Sorting_Visualizer/'
					text='Visualization of various sorting algorithms like QuickSort, MergeSort, BubbleSort..'
				/>
				<Box
					title='Flood Fill Algorithm (Graphs)'
					link='https://jindal2209.github.io/FloodFill_Visualizer/'
					text='Visualization of Flood Fill Algorithm used in paint buckets using Depth First Search(DFS) and Breadth First Search(BFS)'
				/>
				<Box
					title='N-Queen Problem (Backtracking)'
					link='https://jindal2209.github.io/nqueen/'
					text='Visualization of N-Queen problem using backtracking'
				/>
				<Box
					title='Text Editor With Auto Suggestion (Tries, Graphs, HashMaps)'
					link='https://jindal2209.github.io/Text_Editor_Auto_Suggestion/'
					text='A text editor that also provides suggestion based on previous text entered by the user. Data Structures used Tries, Maps, Graphs.'
				/>
				<Box
					title='Transaction Settlement (Heaps)'
					link='https://jindal2209.github.io/transaction_settlement_splitwise/'
					text='An application that allows consumers to split expenses with friends similar to split-wise. Implemented using heaps. Implemented heap data structure in java-script.'
				/>
				<Box
					title='URL Shortener (Hashing)'
					link='http://bitny.herokuapp.com/'
					text='URL shortener using hashing'
				/>
				<Box
					title='..................................'
					link='https://in.linkedin.com/in/Shubham-jindal-116431193'
					text='More will be added as soon as I get some more ideas. Meanwhile you can view my profile. Will be happy to collaborate :-)'
				/>
			</div>
		</div>
	)
}