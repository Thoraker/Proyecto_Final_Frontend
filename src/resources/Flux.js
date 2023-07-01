const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slides: [
				{
					url: 'https://res.cloudinary.com/dqehz6slh/image/upload/v1687397371/lqlhggzj8souxquvercq.jpg',
					title: 'Slide 1',
				},
				{
					url: 'http://res.cloudinary.com/dqehz6slh/image/upload/v1687452386/j13abkvxjzk0icj09gqt.jpg',
					title: 'Slide 2',
				},
				{
					url: 'https://res.cloudinary.com/dqehz6slh/image/upload/v1687397803/lihibq4hco4nw7thlwuw.jpg',
					title: 'Slide 3',
				},
				{
					url: 'https://res.cloudinary.com/dqehz6slh/image/upload/v1687231671/samples/animals/kitten-playing.gif',
					title: 'Slide 3',
				},
				{
					url: 'https://res.cloudinary.com/dqehz6slh/image/upload/v1687231664/samples/animals/three-dogs.jpg',
					title: 'Slide 4',
				},
				{
					url: 'https://res.cloudinary.com/dqehz6slh/image/upload/v1687231658/samples/animals/cat.jpg',
					title: 'Slide 4',
				},
			],
			User: {
				UserData: {
					Usuario: '',
					Email: '',
					Nombre: '',
					Apellido: '',
					Avatar: 'src/assets/invitado.png',
					Dador: false,
					Direcciones: [],
					Mascotas: [],
				},
				Token: '',
			},
		},

		actions: {
			loadInitialData: () => {},
			getPetPhoto: (url) => {
				const petPhotos = getStore().Pet.Photos.push(url)
				setStore({ Pet: { Photos: petPhotos } })
			},

			login: async (user, pass) => {
				const myHeaders = new Headers()
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					user_name: user,
					password: pass,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/login', requestOptions)
					.then((response) => response.json())
					.then((result) => {
						setStore({
							User: {
								UserData: result.User,
								Token: result.Token,
							},
						})
					})
					.catch((error) => alert('error', error))
			},

			createUser: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append("Content-Type", "application/json")

				const raw = JSON.stringify({
					"user_name": values.userName,
					"email": values.email,
					"password": values.password,
					"first_name": values.firstName,
					"last_name": values.lastName,
					"avatar": values.avatar,
					"donor": values.donor,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("http://127.0.0.1:3000/register", requestOptions)
					.then(response => response.text())
					.then(result => alert(result))
					.catch(error => alert('error', error))
			},
			
			createPet: async (values) => {
				const Pet = {
					name: null,
					specie: null,
					age: null,
					size: null,
					photo_url: null,
					need_backyard: true,
				}

				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().User.Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify(Object.assign(Pet, values))

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}
				fetch('http://127.0.0.1:3000/pet', requestOptions)
					.then((response) => response.text())
					.then((result) => console.log(result))
					.catch((error) => console.log('error', error))
			},
			createAddress: async (values) => {
				console.log(getStore().User.Token, 'token')
				const myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + getStore().User.Token);
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"street": values.street,
					"building_number": values.buildingNumber,
					"department_number": values.departmentNumber,
					"commune": values.commune,
					"region": values.region,
					"has_backyard": values.hasBackyard
				});

				const requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
				};

				fetch("http://127.0.0.1:3000/address", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
				
			},
			clearData: async () => {
				setStore({
					User: {
						UserData: {
							Usuario: '',
							Email: '',
							Nombre: '',
							Apellido: '',
							Avatar: 'src/assets/invitado.png',
							Dador: false,
							Direcciones: [],
							Mascotas: [],
						},
						Token: '',
					},
				})
			}
		},
	}
}

export default getState
