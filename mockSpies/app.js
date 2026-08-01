import Crypto from "crypto"
import { saveTokenToFile } from "./data/utils/io.js";


function log(message){
    console.log(message)
}

export function generateToken(logger){
    const token=Crypto.randomBytes(32).toString("hex")
    logger(token)
    return token
}
export  function storeToken(data){
    if(!data){
        throw new Error("Data is required")
    }
     saveTokenToFile(data,"token.txt")
}

const data=generateToken(log)
storeToken(data)