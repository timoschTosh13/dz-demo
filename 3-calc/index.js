import { add } from "./operations/add.js";
import { minus } from "./operations/minus.js";
import { multiply } from "./operations/multiply.js";
import { divide } from "./operations/divide.js";
import EventEmitter from 'node:events'

const actions = {add, minus, multiply, divide}

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operation = process.argv[4]

const myEmit = new EventEmitter();

myEmit.on('result', (value) => {
	console.log('Res = ' + value)
} )

myEmit.on(operation, (a,b) => {
	if(actions[operation]){
		const res = actions[operation](a,b);
		myEmit.emit('result',res)
	} else {
		console.log('uknown action')
	}
})

myEmit.emit(operation, num1, num2)
