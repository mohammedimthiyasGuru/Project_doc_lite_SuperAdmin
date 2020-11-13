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

   ////Company type API//////
   company_type_list() {
    return this.http.get(this.apiUrl + 'companytype/getlist');
   }
   company_type_insert(data) {
    return this.http.post(this.apiUrl + 'companytype/create', data);
   }
   company_type_edit(data) {
    return this.http.post(this.apiUrl + 'companytype/edit', data);
   }
   company_type_delete(data) {
    return this.http.post(this.apiUrl + 'companytype/delete', data);
   }
   //////////////

   ////Subscriber type API//////
   subscriber_type_list() {
    return this.http.get(this.apiUrl + 'subscribertype/getlist');
   }
   subscriber_type_insert(data) {
    return this.http.post(this.apiUrl + 'subscribertype/create', data);
   }
   subscriber_type_edit(data) {
    return this.http.post(this.apiUrl + 'subscribertype/edit', data);
   }
   subscriber_type_delete(data) {
    return this.http.post(this.apiUrl + 'subscribertype/delete', data);
   }
   //////////////


     ////Company details API//////
     company_details_list() {
      return this.http.get(this.apiUrl + 'companydetails/getlist');
     }
     company_details_insert(data) {
      return this.http.post(this.apiUrl + 'companydetails/create', data);
     }
     company_details_edit(data) {
      return this.http.post(this.apiUrl + 'companydetails/edit', data);
     }
     company_details_delete(data) {
      return this.http.post(this.apiUrl + 'companydetails/delete', data);
     }
     //////////////
   

   





}
