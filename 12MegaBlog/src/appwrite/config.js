import conf from '../conf.js';
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service{
   client = new Client();
   databases;
   bucket;
   
   constructor(){
      this.client 
         .setEndpoint(conf.appwriteUrl)
         .setProject(conf.appwriteProjectId);
      this.databases = new  Databases(this.client)
      this.bucket = new  Storage(this.client)
   }
   async createPost({title, slug, content, featuredImage, status, userId}){
      try {
         return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,                      //* we are considering our slug as the documentId we needed here we can take whatever we want
            {
               title,
               content,
               featuredImage,
               status,
               userId,
            }
         )
      } catch (error) {
         throw new Error(error);
         
      }
   }

   async updatePost(slug,{title, content, featuredImage, status}){
      try {
         return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
               title,
               content,
               featuredImage,
               status,
            }
         )
      } catch (error) {
         throw new Error(error);
      }
   }

   async deletePost(slug){
      try {
         await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
         )
         return true
      } catch (error) {
         console.log("Appwrite Service :: DeletePost :: error",error)
         return false
      }
   }

   async getPost(slug){
      try {
         return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug  
         )
      } catch (error) {
         console.log("Appwrite Service :: getPost :: error",error);
         return false
      }
   }
   
   async getPosts(queries = [Query.equal("status","active")]){
      try {
         return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries        //* we may also define the queries here rather than in the parameters we have given into
         )
      } catch (error) {
         console.log("Appwrite Service :: getPosts :: error",error);
         return false
      }
   }

   //* file upload service or method whatever you may say

   async uploadFile(file){
      try {
         return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
         )
      } catch (error) {
         console.log("Appwrite Service :: getPosts :: error",error);
         return false
      }
   }

   async deleteFile(fileId){
      try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
         )
         return true
      } catch (error) {
         console.log("Appwrite Service :: getPosts :: error",error);
         return false
      }
   }

   getFilePreview(fileId){
      return this.bucket.getFilePreview(
         conf.appwriteBucketId,
         fileId
      )
   }
}

const service = new Service();

export default service;