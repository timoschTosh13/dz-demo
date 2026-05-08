import { parentPort, workerData } from "worker_threads";

const count = workerData.array.reduce((acc, num) => {
    return num % 3 === 0 ? acc + 1 : acc;
}, 0);

parentPort.postMessage(count);

