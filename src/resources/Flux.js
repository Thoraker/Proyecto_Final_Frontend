const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slides: [
				{
					url: 'https://picsum.photos/400/640',
					title: 'Slide 1',
				},
				{
					url: 'https://picsum.photos/400/640',
					title: 'Slide 2',
				},
				{
					url: 'https://picsum.photos/400/640',
					title: 'Slide 3',
				},
			]
		},

		actions: {
			loadInitialData: () => {
				
			}
		},
	}
}

export default getState
