
const input1 = process.argv[2]
const input2 = process.argv[3]
const input3 = process.argv[4]

let h = parseInt(input1)
let m = parseInt(input2)
let s = parseInt(input3)


const time = (s * 1000) + (m * (60 * 1000)) + (h * (60 * 60 * 1000)) 

setTimeout(()=> {
	console.log('call is finished')
}, time)