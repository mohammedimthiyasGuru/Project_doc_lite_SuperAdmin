import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  // fetchres_details(data) {
  //   return this.http.post(this.apiUrl + 'vendordetails/getting_shop_name', data);
  // }

  // user_list() {
  //   return this.http.get(this.apiUrl + 'userdetails/getlist');
  // }


  login(data){
   return this.http.post(this.apiUrl + 'chat_user/login', data);
  }

  
  create_cata(data){
    return this.http.post(this.apiUrl + 'chat_cat/create', data);
   }
 

   getlist_cata(data){
    return this.http.post(this.apiUrl + 'chat_cat/getlist_id', data);
   }

   delete_cata(data){
    return this.http.post(this.apiUrl + 'chat_cat/delete', data);
   }

   edit_cata(data){
    return this.http.post(this.apiUrl + 'chat_cat/edit', data);
   }


   getlist_items(data){
    return this.http.post(this.apiUrl + 'chat_item/getlist_cat_id', data);
   }


   create_items(data){
    return this.http.post(this.apiUrl + 'chat_item/create', data);
   }

   delete_items(data){
    return this.http.post(this.apiUrl + 'chat_item/delete', data);
   }

   edit_items(data){
    return this.http.post(this.apiUrl + 'chat_item/edit', data);
   }


   getlist_allitemcode(data){
    return this.http.post(this.apiUrl + 'chat_item/getlist_id', data);
   }


   create_billing(data){
    return this.http.post(this.apiUrl + 'chat_billing/create', data);
   }


   get_userlogout(data){
    return this.http.post(this.apiUrl + 'chat_billing/userlogout', data);
   }


   getlist_billing(data){
    return this.http.post(this.apiUrl + 'chat_billing/getlist_id', data);
   }



   forgot_password(data){
    return this.http.post(this.apiUrl + 'chat_user/forgotpassword', data);
   }

}
