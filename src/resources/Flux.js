const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slides: [
							
			],
			User: {
				UserData: {
					Usuario: '',
					Email: '',
					Nombre: '',
					Apellido: '',
					Avatar: '',
					Dador: false,
					Direcciones: [
						{
							"id": '',
							"Calle": '',
							"Numero": '',
							"Departamento": '',
							"Comuna": '',
							"Region": '',
							"Tiene Patio": '',
						}
					],
					Mascotas: [
						{
							'id': '',
							'Nombre': '',
							'Especie': '',
							'Tamano': '',
							'Necesita_Patio': false,
							'En_Adopcion': false,
							'Fotos': [],
						}
					],
				},
				Token: '',
			},
			Pet: 	{
				'id': '',
				'Nombre': '',
				'Especie': '',
				'Tamano': '',
				'Necesita_Patio': false,
				'En_Adopcion': false,
				'Fotos': [],
			},
		},

		actions: {
			loadInitialData: () => {console.log('loadInitialData');},

			createPetPhoto: async (link) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().User.Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					'url': link,
					'pet_id': getStore().Pet.id
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				}

				fetch('http://127.0.0.1:3000/photo', requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error))
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
					.catch((error) => console.log('error', error))
			},

			createUser: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					'user_name': values.userName,
					'email': values.email,
					'password': values.password,
					'first_name': values.firstName,
					'last_name': values.lastName,
					'avatar': values.avatar,
					'donor': values.donor,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				}

				fetch('http://127.0.0.1:3000/register', requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error))
			},

			createPet: async (values) => {
				const myHeaders = new Headers();
					myHeaders.append('Authorization', 'Bearer ' + getStore().User.Token)
					myHeaders.append('Content-Type', 'application/json');

				const raw = JSON.stringify({
					'name': values.name,
					'specie': values.specie,
					'age': values.age,
					'size': values.size,
					'need_backyard': values.needBackyard,
					'for_adoption': values.forAdoption
				})

				const requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
				}

				fetch('http://127.0.0.1:3000/pet', requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({							
							Pet: result.Pet
						})
						console.log(result)
					})
					.catch(error => console.log('error', error))
			},

			createAddress: async (values) => {
				console.log(getStore().User.Token, 'token')
				const myHeaders = new Headers();
				myHeaders.append('Authorization', 'Bearer ' + getStore().User.Token);
				myHeaders.append('Content-Type', 'application/json');

				const raw = JSON.stringify({
					'street': values.street,
					'building_number': values.buildingNumber,
					'department_number': values.departmentNumber,
					'commune': values.commune,
					'region': values.region,
					'has_backyard': values.hasBackyard
				})

				const requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
				}

				fetch('http://127.0.0.1:3000/address', requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},
		},
	}
}

export default getState
