import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-loginpages',
  templateUrl: './loginpages.component.html',
  styleUrls: ['./loginpages.component.css']
})
export class LoginpagesComponent implements OnInit {
 

  User_id : string = '';
  Password : string = ''; 
  Condition_check :  string = '';
  error_msg : string = '';

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
    ){ }

  ngOnInit(): void {
  }


  LoginAction(){   
    if(this.User_id == '' || this.Password == '' || this.User_id == undefined || this.Password == undefined){
      alert('Please enter all the fields');
   }
   else{

    let a = {
        'User_id' : this.User_id,
        'Password' : this.Password
    }
    // this._api.login(a).subscribe(
    //   (response: any) => {
    //     console.log(response.Data);

    //     if(response.Code == 404){
    //       alert(response.Message);
    //     }else{
    //       alert("Login Successfully");
    //       this.storage.set('User_details', response.Data);
    //       ;

    //       this.storage.set('current_time_login',new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
    //       console.log(this.storage.get('User_details'));
    //       this.router.navigateByUrl('/dashboard');
    //     }
    //   }
    // );
    this.router.navigateByUrl('/dashboard');
  }

}

}
