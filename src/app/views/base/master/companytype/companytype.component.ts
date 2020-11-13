import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-companytype',
  templateUrl: './companytype.component.html',
  styleUrls: ['./companytype.component.css']
})
export class CompanytypeComponent implements OnInit {


  company_type : string = '';
  create_at : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  companytype_id : string = '';
  companytypelist = [];
  updatebutton = false


  searchCoupon = '';






  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: '250px', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { },// a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search',// label thats displayed in search input,
    searchOnKey: 'name',// key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }

  
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
    ){ }

  ngOnInit(): void {
    this.updatebutton = false;
    this.company_type = '';
    this.Listcompanytype();
  }


  Insertcompanytype() {
    let a = {
      'company_type' : this.company_type,
      'date_and_time' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"})
      };
  this._api.company_type_insert(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Added Successfully');
      this.ngOnInit();
    }
  );
  }


  Editcompanytype(){
    let a = {
      '_id' : this.companytype_id,
      'company_type' : this.company_type
     };
  this._api.company_type_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert("Updated Successfully");
      this.ngOnInit();
    }
  );
  }


  Listcompanytype() {
  this._api.company_type_list().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.companytypelist = response.Data;
    }
  );
  }

  Deletecompanytype(data) {
    let a = {
      '_id' : data
     };
  this._api.company_type_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Deleted Successfully');
      this.ngOnInit();
    }
  );
  }


  Editcompanytypedata(data){
   this.company_type = data.company_type;
   this.companytype_id = data._id;
   this.updatebutton = true;
  }




}
