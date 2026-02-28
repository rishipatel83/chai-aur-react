import conf from '../conf/conf.js';
import {Client, Account, ID} from "appwrite";

export class AuthService{
   client = new Client();
   account;
   constructor(){
      this.client
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.account = new Account(this.client)
   }
   async createAccount({email,password,name}){
      try {
         const userAccount = await this.account.create(ID.unique(),email,password,name);
         if(userAccount){
            // we will call a method here from which the user gets directly logged in 
            return this.login({email,password});
         }
         else
            return userAccount;
      } catch (error) {
         throw new Error(error);
         
      }
   }
   
   async login({email,password}){
      try {
         return await this.account.createEmailPasswordSession(email,password);
      } catch (error) {
         throw new Error(error);
      }
   }

   async getCurrentUser(){
      try {
         return await this.account.get();
      } catch (error) {
         throw new Error(error);
      }
   }
   
   async logout(){
      try {
         return await this.account.deleteSessions();
      } catch (error) {
         throw new Error(error);
         
      }
   }
}

const authService = new AuthService();

export default authService