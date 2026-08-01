import CryptoJS from "crypto-js";

export function encrypMessage(message,key,callback){
    const encrypedMessage = CryptoJS.AES.encrypt(message,key).toString()
    callback(encrypedMessage);
}

export function encrypMessagePromize(message,key){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const encryptedMessage=CryptoJS.AES.encrypt(message,key).toString()
        if(encryptedMessage){
            resolve(encryptedMessage)
        } else {
            reject(new Error("Failed to encrypt message"))
        }
    },2000)
 })
}
const message={
    name : "mizan",
    password:"1122334455"
}
const secretKey="suon"
encrypMessage(JSON.stringify(message),secretKey,(encryptedMessage)=>{
    console.log(encryptedMessage);
})

encrypMessagePromize(JSON.stringify(message),secretKey).then((encryptedMessage)=>console.log(encryptedMessage))