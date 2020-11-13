import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

   

  ////Form data////
  company_log : string = 'http://18.237.123.253:3000/api/uploads/default.jpg';
  company_name : string = '';
  company_type : string = '';
  no_of_emp : number = 1 ;
  subscriber_type : string = '';
  package_end_date : string = '';
  about_company : string = '';
  create_at : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  company_details_list = [];
  company_details_id : string = '';
  email : string = '';
  password : string = '';
  company_id : string = '';



  ///addition data///
  company_type_list = [];
  subscriber_type_list = [];


  updatebutton = false
  searchCoupon = '';
  selectedimgae : any;
  


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

  displayBasic: boolean;
  cities1 = [
    { label: 'Select City', value: null },
    { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
    { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
    { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
    { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
    { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
  ];
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
  selectedCity1: any;
  selectedCities:any;

  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
    ){ }

  ngOnInit(): void {
  this.updatebutton = false;
  this.displayBasic = false;
  this.company_log  = 'http://18.237.123.253:3000/api/uploads/default.jpg';
  this.company_name  = '';
  this.company_type  = '';
  this.no_of_emp  = 1 ;
  this.subscriber_type  = '';
  this.package_end_date = '';
  this.about_company  = '';
  this.create_at  = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  this.company_details_list = [];
  this.company_details_id  = '';
  this.email = '';
  this.password = '';
  this.company_id = ''
  this.listcompanytype();
  this.listsubscribertype();
  this.Listcompanydetails();
  }


  listcompanytype() {
    this._api.company_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.company_type_list = response.Data;
        this.company_type = response.Data[0].company_type;
        console.log(this.company_type);
      }
    );
  }

  listsubscribertype() {
    this._api.subscriber_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.subscriber_type_list = response.Data;
        this.subscriber_type = response.Data[0].subscriber_type;
      }
    );
  }

  ////// Inserting Data
  
  Insertcompanydetails() {
    let a = {
      'company_log' : this.company_log,
      'company_name' : this.company_name,
      'company_type' : this.company_type,
      'no_of_emp' : this.no_of_emp,
      'subscriber_type' : this.subscriber_type,
      'package_end_date' : this.package_end_date,
      'about_company' : this.about_company,
      'create_at' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
      'status' : 'true',
      'email' : this.email,
      'password' : this.password,
      'company_id' : this.company_name.toLowerCase().replace(/\s/g,"")
      };
      console.log(a);
  this._api.company_details_insert(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Added Successfully');
      this.ngOnInit();
    }
  );
  }


  Editcompanydetails(){
    let a = {
      '_id' : this.company_details_id,
      'company_log' : this.company_log,
      'company_name' : this.company_name,
      'company_type' : this.company_type,
      'no_of_emp' : this.no_of_emp,
      'subscriber_type' : this.subscriber_type,
      'package_end_date' : this.package_end_date,
      'about_company' : this.about_company,
      'create_at' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
      'status' : 'true',
      'email' : this.email,
      'password' : this.password,
      'company_id' : this.company_name.toLowerCase().replace(/\s/g,"")
     };
  this._api.company_details_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert("Updated Successfully");
      this.ngOnInit();
    }
  );
  }


  Listcompanydetails() {
  this._api.company_details_list().subscribe(
    (response: any) => {
      console.log(response.Data);
      this.company_details_list = response.Data;
    }
  );
  }

  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
  this._api.company_details_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Deleted Successfully');
      this.ngOnInit();
    }
  );
  }


  Editcompanydetailsdata(data){
   this.company_type = data.company_type;
   this.company_details_id = data._id;
   this.company_log  = data.company_log;
   this.company_name  = data.company_name;
   this.company_type  = data.company_type;
   this.no_of_emp  = data.no_of_emp;
   this.subscriber_type  = data.subscriber_type;
   this.package_end_date = data.package_end_date;
   this.about_company  = data.about_company;
   this.email = data.email;
   this.password = data.password;
   this.company_id =  data.company_id;
   this.updatebutton = true;
   this.showBasicDialog();
  }





  //////Additional Calling Funcation//////

  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        console.log(width,height);
        if(width == 500 && height == 500){
          let d = this.selectedimgae.size / 100000 ;
         if(d < 10){
          this.addfiles1();
         }else{
          alert('Please upload the file below 1 MB');
          this.imgType.nativeElement.value = ""; 
         }          
        }
        else{
          alert('Please upload the file size 500 * 500');
          this.imgType.nativeElement.value = ""; 
        }
      };
      img.src = fr.result as string; // The data URL 
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }



  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://18.237.123.253:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.company_log = res.Data;
      });
  }



  showBasicDialog() {
    this.displayBasic = true;
  }


 



}
