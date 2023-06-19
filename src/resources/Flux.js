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
				
			},
			postPet: async() => {
				const myHeaders = new Headers()
				myHeaders.append("Authorization", "Bearer xxx");
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": "Lola",
					"specie": 2,
					"age": "5 años",
					"size": 1,
					"photo_url": null,
					"need_backyard": false
				});

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};
				fetch("localhost:3000/pet", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
				}
		},
	}
}

export default getState
