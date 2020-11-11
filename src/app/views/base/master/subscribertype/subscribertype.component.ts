import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-subscribertype',
  templateUrl: './subscribertype.component.html',
  styleUrls: ['./subscribertype.component.css']
})
export class SubscribertypeComponent implements OnInit {

  
  company_logo : string = '';
  company_name : string = '';
  company_type : string = '';
  no_of_emp: string = '';
  subscriber_type : string = '';
  date_of_create : string = '';
  date_of_end : string = '';
  about_company : string = '';

  updatebutton = false
  searchCoupon = '';



  datas:any = [];
  id_list: any = [];
  parking_id : any;

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

    // console.log(this.storage.get('User_details'));

    let cat_id = this.storage.get('cat_id');
    // let user_details = this.storage.get('User_details');
    console.log(cat_id);
    let a = {
      'cat_id' : cat_id
     }
  this._api.getlist_items(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      this.datas = response.Data;
    }
  );

  }

  additems(){
    this.router.navigateByUrl('/base/Add_Items');
  }

  // Itemadd(){
  //   if(
  //     this.Item_Code == '' || this.Item_Code == undefined ||
  //     this.Item_Name == '' || this.Item_Name == undefined ||
  //     this.Item_Price == 0 || this.Item_Price == undefined    
  //   ){
  //     alert('Please enter all the fields');
  //  }
  //  else{
  //   console.log(this.storage.get('cat_id'));
  //   let cat_id = this.storage.get('cat_id');
  //   let cat_name = this.storage.get('cat_name');
  //   console.log(this.storage.get('User_details'));
  //   let user_details = this.storage.get('User_details');
  //   let a = {
  //       'item_Name' : this.Item_Name,
  //       'item_code' : this.Item_Code,
  //       'item_price' : this.Item_Price,
  //       'cat_id' : cat_id,
  //       'User_id' : user_details._id,
  //       'cat_name': cat_name
  //   }
  //   console.log(a);
  //   this._api.create_items(a).subscribe(
  //     (response: any) => {
  //       console.log(response.Data);
  //       if(response.Code == 404){
  //         alert(response.Message);
  //       }else{
  //         alert(response.Message);
  //         this.ngOnInit();
  //       }
  //     }
  //   );
  // }

  // }


  delete(data){
    let a = {
      _id : data
    }
    console.log(a);
 this._api.delete_items(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        if(response.Code == 404){
          alert(response.Message);
        }else{
          alert(response.Message);
          this.ngOnInit();
        }
      }
    );
  }


  // edit(data){
  //   console.log(data);
  //   this.Item_Code = data.item_code;
  //   this.Item_Name = data.item_Name;
  //   this.Item_Price = data.item_price;
  //   this.Items_id = data._id;
  //   this.updatebutton = true;
  // }

  edit(){

  }

  Itemadd (){

  }

  editAction()
{
  
}
  // editAction(){
  //   let a = {
  //     '_id': this.Items_id,
  //     'item_Name' : this.Item_Name,
  //     'item_code' : this.Item_Code,
  //     'item_price' : this.Item_Price,
  // }
  // console.log(a);
  // this._api.edit_items(a).subscribe(
  //   (response: any) => {
  //     console.log(response.Data);
  //     if(response.Code == 404){
  //       alert(response.Message);
  //     }else{
  //       alert(response.Message);
  //       this.ngOnInit();
  //     }
  //   }
  // );
  // }

  get_mech() {

  }

}
