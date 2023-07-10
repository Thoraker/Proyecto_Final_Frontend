const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			mascotasEnAdopcion: [],
			direcciones: [],
			mascotas: [],
			usuario: {
				user: '',
				email: '',
				first_name: '',
				last_name: '',
				avatar: '',
			},
			token: '',
			mascotaActiva: {
				id: '',
				age:'',
				name: '',
				specie: '',
				size: '',
				need_backyard: false,
				for_adoption: false,
				photos: [],
				messages: [],
			},
		},

		actions: {
			loadInitialData: async () => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  }
				  
				  fetch("http://127.0.0.1:3000/pets", requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({
							mascotasEnAdopcion: result,
							mascotaActiva: result[0],
						})
						console.log(getStore().mascotasEnAdopcion)
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
					.then((result) => alert(result.response))
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
							usuario: result.user,
							direcciones: result.user.addresses,
							mascotas: result.user.pets,
							token: result.token,
						})
						alert('Login correcto')
					})
					.catch((error) => alert('error', error))
			},

			createPet: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().token)
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
							usuario: result.user,
							mascotas: result.user.pets,
							mascotaActiva: result.pet,
						})
						alert(result.response)
					})
					.catch((error) => alert('error', error))
			},

			createPetPhoto: async (link) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					url: link,
					pet_id: getStore().activePet.id,
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
							mascotas: result.user.pets,
						})
						alert(result.response)
					})
					.catch((error) => alert('error', error))
			},

			createAddress: async (values) => {
				console.log(getStore().Token, 'token')
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().token)
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
							usuario: result.user,
							direcciones: result.user.address,
						})
						alert(result.response)
					})
					.catch((error) => alert('error', error))
			},

			addPet: (value) => {
				setStore({
					activePet: {
						id: value.id,
						nombre: value.name,
						especie: value.specie,
						tamano: value.size,
						necesita_Patio: value.need_backyard,
						enAdopcion: value.for_Adoption,
						fotos: value.Fotos,
					},
				})
			},
			sendMessage: async (values) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					reference_post_id: values.mensajes[0].id,
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
					.then((result) => alert(result.response))
					.catch((error) => alert('error', error))
			}, 
			cleanDirections: () => {
				setStore({
					direcciones: [],
				})
			}, 
			cleanPets: () => {
				setStore({
					mascotas: [],
				})				
			},
			getPet: (id) => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  }
				  
				fetch("http://127.0.0.1:3000/pet/"+id, requestOptions)
					.then(response => response.json())
					.then(result => 
						setStore({
							mascotaActiva: result.pet
					}))
					.catch(error => console.log('error', error))
				
			},
		},
	}
}

export default getState
