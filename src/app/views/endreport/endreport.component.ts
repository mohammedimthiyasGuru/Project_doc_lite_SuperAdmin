import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-endreport',
  templateUrl: './endreport.component.html',
  styleUrls: ['./endreport.component.css']
})
export class EndreportComponent  {


  start_time : string ;
  end_time : string ;
  total_bill : number = 0;
  total_amount : number = 0;
  card_amount : number = 0;
  cash_amount : number = 0;
  google_pay : number = 0;




  Datas : any ;
  Datas_id : string;
  myDate : string;

  timeLeft: number = 60;
  interval;

  Bill_print : string =  'true';


    constructor(

        private router: Router,
        @Inject(SESSION_STORAGE) private storage: StorageService,
        private http: HttpClient,
        private _api: ApiService,
        private routes: ActivatedRoute
        )
        { 
          this.start_time = this.storage.get('current_time_login');
          this.end_time = this.storage.get('current_time_logout');
          console.log(this.start_time);
          console.log(this.end_time);
          let a = {
            'st_date' : this.start_time,
            'en_date' : this.end_time,
            // "st_date" : "11/1/2020, 8:41:00 PM",
            // "en_date" : "11/1/2020, 10:42:13 PM"
          }
        console.log(a);
        this._api.get_userlogout(a).subscribe(
          (response: any) => {
            console.log(response.Data);
            if(response.Code == 404)
            {
              alert(response.Message);
            }
            else
            {
              this.total_bill = response.Data.length;
              for(let a = 0; a < response.Data.length ; a ++)
              { 
                this.total_amount = this.total_amount + response.Data[a].Grand_total;
                console.log(response.Data[a].Cash_type);
                if(response.Data[a].Cash_type == "Cash"){
                  this.cash_amount =  this.cash_amount + response.Data[a].Grand_total; 
                }else if(response.Data[a].Cash_type == "Card"){
                  this.card_amount =  this.card_amount + response.Data[a].Grand_total; 
                }
                else if(response.Data[a].Cash_type == "Google Pay"){
                  this.google_pay =  this.google_pay + response.Data[a].Grand_total; 
                }
              }
            }
          });




        }

        printComponent(cmpName)
        {
          let printContents = document.getElementById(cmpName).innerHTML;
          let originalContents = document.body.innerHTML;
          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents;
          this.print();
        }

        print(){
          window.location.reload();
        }
      }
