export {};


type Gender = 'female' | 'male'
type Hair = {
	color: string,
	type: string
}

type Coords = {
	lat: number,
	"lng": number
}

type Address = {
	address: string,
	city: string,
	state: string,
	stateCode: string,
	postalCode: number,
	coordinates: Coords,
	country: string
}

type Bank = {
	cardExpire: string,
	cardNumber: number,
	cardType: string,
	currency: string,
	iban: string
}

type Company = {
	department: string,
	name: string,
	title: string,
	address: Address
}

type Crypto = {
	coin: string,
	wallet: string,
	network: string
}

interface User {
	id: number,
	firstName: string,
	lastName: string,
	maidenName: string,
	age: number,
	gender: Gender,
	email: string,
	phone: string,
	username: string,
	password: string,
	birthDate: Date,
	image: string,
	bloodGroup: string,
	height: number,
	weight: number,
	eyeColor: string,
	hair: Hair,
	ip: string,
	address: Address
	macAddress: string,
	university: string,
	bank: Bank,
	company: Company,
	ein: string,
	ssn: string,
	userAgent: string,
	crypto: Crypto
	role: string
}

async function getUsers(): Promise<User[]> {
		const res = await fetch('https://dummyjson.com/users');

		if(!res.ok){
			throw new Error('HTTP error')
		}

		const data = await res.json() 

		console.log(data)

		return data
}

getUsers()