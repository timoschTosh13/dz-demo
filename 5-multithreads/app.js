const { PerformanceObserver  } = require ('perf_hooks')
const os = require('os')
const { Worker } = require('worker_threads') 


const perfomanceObserver = new PerformanceObserver((items) => {
	items.getEntries().forEach((entry) => {
	  console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
	});
  });

perfomanceObserver.observe({entryTypes:['function','measure']})








let count = 0 ;

const n = 300000;
const arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = i + 1;
}











performance.mark('start sync')
for(let i = 0; i < arr.length; i++){
	if (arr[i] % 3 === 0){
		count++
	}
}
console.log(`sync count = ${count}`)
performance.mark('end sync')
performance.measure('sync', 'start sync', 'end sync')











const threads = os.cpus().length;

function chunkArray(array, N) {
	const result = [];
	const chunkSize = Math.ceil(array.length / N); // Размер каждого подмассива
  
	for (let i = 0; i < array.length; i += chunkSize) {
	  result.push(array.slice(i, i + chunkSize)); // Добавляем подмассив в результат
	}
	
	return result;
}

const chunks = chunkArray(arr, threads)











  const runWorker = chunk => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker.js', {
            workerData: { array: chunk }
        });

		worker.on('message', resolve); 
		worker.on('error', reject); 
	})
  }





  async function main() {
    performance.mark('start worker')
    try {
        const results = await Promise.all(chunks.map(chunk => runWorker(chunk)));
    
    // Суммируем результаты от всех воркеров
    	const finalCount = results.reduce((sum, current) => sum + current, 0);
		performance.mark('end worker')
		performance.measure('worker', 'start worker','end worker')
		console.log(`worker count: ${finalCount}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();