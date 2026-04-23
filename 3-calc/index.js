import { add } from "./operations/add.js";
import { minus } from "./operations/minus.js";
import { multiply } from "./operations/multiply.js";
import { divide } from "./operations/divide.js";

const actions = {add, minus, multiply, divide}

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operation = process.argv[4]

if (actions[operation]){
	const result = actions[operation](num1,num2);
	console.log(result)
} else {
	console.log("unknown actions")
}