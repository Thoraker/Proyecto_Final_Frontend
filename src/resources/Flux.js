const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slides: [
				{
					url: 'https://picsum.photos/id/37/580/300',
					title: 'Slide 1',
				},
				{
					url: 'https://picsum.photos/id/27/580/300',
					title: 'Slide 2',
				},
				{
					url: 'https://picsum.photos/id/23/580/300',
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
