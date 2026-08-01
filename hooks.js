export class User{
    constructor(email){
        this.email=email
    }
    updateEmail(newEmail){
        this.email=newEmail
    }
    getEmail(){
        return this.email
    }
    deleteEmail(){
        this.email=null
    }
    getEmailLength(){
        return this.email.length
    }
    getEmailCapitalized(){
        return this.email.toUpperCase()
    }
    clearEmail(){
        this.email="null"
    }
    isEmailValid(){
        return this.email.includes("@")
    }
    isEmailEmpty(){
        return this.email===null
    }
    isEmailLengthValid(){
        return this.email.length>0
    }
}