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
					console.log(getStore());})
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
						alert('Login correcto')})
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

			newPetPhoto: async (link) => {
				console.log(link, 'link');
				const myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + getStore().token);
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"url": link,
					"pet_id": getStore().mascotaActiva.id,
				});

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("http://127.0.0.1:3000/photo", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));






				// const myHeaders = new Headers()
				// myHeaders.append('Authorization', 'Bearer ' + getStore().token)
				// myHeaders.append('Content-Type', 'application/json')

				// const raw = JSON.stringify({
				// 	url: link,
				// 	pet_id: getStore().mascotaActiva.id,
				// })

				// console.log(raw, 'raw')

				// const requestOptions = {
				// 	method: 'POST',
				// 	headers: myHeaders,
				// 	body: raw,
				// 	redirect: 'follow',
				// }

				// fetch('http://127.0.0.1:3000/photo', requestOptions)
				// 	.then((response) => response.json())
				// 	.then((result) => {
				// 		setStore({
				// 			mascotas: result.user.pets,
				// 		})
				// 		alert(result.response)
				// 	})
				// 	.catch((error) => alert('error', error))
			},

			createAddress: async (values) => {
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
					mascotaActiva: {
						id: value.id,
						age: value.age,
						name: value.name,
						specie: value.specie,
						size: value.size,
						need_backyard: value.needBackyard,
						for_adoption: value.for_adoption,
						photos: value.photos,
						messages: value.messages,
					}})
				console.log(getStore().mascotaActiva, 'addPet')
			},
			sendMessage: async (input) => {
				const myHeaders = new Headers()
				myHeaders.append('Authorization', 'Bearer ' + getStore().token)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					reference_post_id: getStore().mascotaActiva.messages[0].id,
					pet_id: getStore().mascotaActiva.id,
					message: input,
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
			getPet: async (id) => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  }
				  
				fetch("http://127.0.0.1:3000/pet/"+id, requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({
							mascotaActiva: result.pet
					})
					console.log(getStore().mascotaActiva)})
					.catch(error => console.log('error', error))
				
			},
		},
	}
}

export default getState
