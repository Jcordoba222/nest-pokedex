import { setEnvironmentData } from "worker_threads";

export const envConfiguration = ()=>({
    environ1ment : process.env.NODE_ENV || 'env',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaulLimit: process.env.DEFAUL_LIMIT || 7
})