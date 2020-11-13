import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  Email_id : string;
  
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    ){ }

  ngOnInit(): void {
  }


  back(){
    this.router.navigateByUrl('/login');
  }

  send(){
    if(this.Email_id == undefined || this.Email_id == ''){
      alert('please enter all the fields');
    }else {
      let a = {
        Email_id: this.Email_id
      }
      // this._api.forgot_password(a).subscribe(
      //   (response: any) => {
      //     console.log(response);
      //     if(response.Code == 300){
      //       alert(response.Message);
      //     }else{
      //       alert('Password Send to your email id');
      //     }
          
      //   }
      // );
    }
  }

}
