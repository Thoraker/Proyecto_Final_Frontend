const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			For_Adoption: [],
			Direcciones: [],
			Mascotas: [],
			User: {
				Usuario: '',
				Email: '',
				Nombre: '',
				Apellido: '',
				Avatar: '',
			},
			Token: '',
			ActivePet: {
				id: '',
				Nombre: '',
				Especie: '',
				Tamano: '',
				Necesita_Patio: false,
				En_Adopcion: false,
				Fotos: [],
			},
		},

		actions: {
			loadInitialData: async () => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("http://127.0.0.1:3000/pets", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({
							For_Adoption: result,
						})
						console.log(getStore().For_Adoption);
					}
						)
					.catch(error => alert('error', error));
			},

			createUser: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					user_name: values.userName,
					email: values.email,
					password: values.password,
					first_name: values.firstName,
					last_name: values.lastName,
					avatar: values.avatar,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/register', requestOptions)
					.then((response) => response.json())
					.then((result) => alert(result.Response))
					.catch((error) => alert('error', error))
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
							User: result.User,
							Direcciones: result.User.Direcciones,
							Mascotas: result.User.Mascotas,
							Token: result.Token,
						})
						alert('Login correcto')
					})
					.catch((error) => alert('error', error))
			},

			createPet: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					name: values.name,
					specie: values.specie,
					age: values.age,
					size: values.size,
					need_backyard: values.needBackyard,
					for_adoption: values.forAdoption,
					message: values.message,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/pet', requestOptions)
					.then((response) => response.json())
					.then((result) => {
						setStore({
							User: result.User,
							Mascotas: result.User.Mascotas,
							Pet: result.Pet,
						})
						alert(result.Response)
					})
					.catch((error) => alert('error', error))
			},

			createPetPhoto: async (link) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					url: link,
					pet_id: getStore().ActivePet.id,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/photo', requestOptions)
					.then((response) => response.json())
					.then((result) => {
						setStore({
							Mascotas: result.User.Mascotas,
						})
						alert(result.Response)
					})
					.catch((error) => alert('error', error))
			},

			createAddress: async (values) => {
				console.log(getStore().Token, 'token')
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					street: values.street,
					building_number: values.buildingNumber,
					department_number: values.departmentNumber,
					commune: values.commune,
					region: values.region,
					has_backyard: values.hasBackyard,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/address', requestOptions)
					.then((response) => response.json())
					.then((result) => {
						setStore({
							User: result.User,
							Direcciones: result.User.Direcciones,
						})
						alert(result.Response)
					})
					.catch((error) => alert('error', error))
			},

			addPet: (value) => {
				setStore({
					ActivePet: {
						id: value.id,
						Nombre: value.Nombre,
						Especie: value.Especie,
						Tamano: value.Tamano,
						Necesita_Patio: value.Necesita_Patio,
						En_Adopcion: value.En_Adopcion,
						Fotos: value.Fotos,
					},
				})
			},
			sendMessage: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().Token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					reference_post_id: values.Mensajes[0].id,
					pet_id: values.id,
					message: values.message,
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch('http://127.0.0.1:3000/post', requestOptions)
					.then((response) => response.json())
					.then((result) => alert(result.Response))
					.catch((error) => alert('error', error))
			}, 
			cleanDirections: () => {
				setStore({
					Direcciones: [],
				})
			}, 
			cleanPets: () => {
				setStore({
					Mascotas: [],
				})				
			}
		},
	}
}

export default getState
