
 
 import axios from "axios"


 const api =axios.create({
    baseURL:"https://localhost:3000",
    withCredentials:true
 })

 export async function register({username, email, password}){
    try{
        const response = await api.post('https://localhost:3000/api/auth/register',)

        return response.data
    }catch (err){
        console.log(err);
        
    }
 }


 export async function login({email,password}){
    try{
        const response= await api.post('https://localhost:3000/api/auth/login')

        return response.data
    }catch(err){
        console.log(err);
        
    }
 }


 export async function logout(){
    try {
        const response = await api.get("https://localhost:3000/api/auth/logout")
        return response.data
    } catch (error) {
        console.log(err);
        
    }



 }


 export async function getMe(){
    try {
        const response = await api.get("https://localhost:3000/api/auth/get-me")
        return response.data
    } catch (error) {
        console.log(err);
        
    }



 }

