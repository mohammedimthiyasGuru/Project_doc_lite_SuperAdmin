import { Component, OnInit ,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-addcata',
  templateUrl: './addcata.component.html',
  styleUrls: ['./addcata.component.css']
})
export class AddcataComponent implements OnInit {


  
  Cata : string = '';
  Cata_id : string = '';
  updatebutton = false;



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
    this.Cata = '';
    console.log(this.storage.get('User_details'));
    let user_details = this.storage.get('User_details');
    let a = {
      'User_id' : user_details._id
  }
  this._api.getlist_cata(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      this.datas = response.Data;
    }
  );

  }

  additems(data){
    this.storage.set('cat_id', data._id);
    this.storage.set('cat_name', data.Cat_Name);
    this.router.navigateByUrl('/base/Add_Items');
  }

  addCat_action(){
    if(this.Cata == '' || this.Cata == undefined){
      alert('Please enter all the fields');
   }
   else{
    console.log(this.storage.get('User_details'));
    let user_details = this.storage.get('User_details');
    let a = {
        'Cat_Name' : this.Cata,
        'User_id' : user_details._id
    }
    console.log(a);
    this._api.create_cata(a).subscribe(
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

  }


  delete(data){
    let a = {
      _id : data
    }
 this._api.delete_cata(a).subscribe(
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


  edit(data){
    console.log(data);
    this.Cata = data.Cat_Name;
    this.Cata_id = data._id;
    this.updatebutton = true;
  }


  editAction(){
    let a = {
      '_id': this.Cata_id,
      'Cat_Name' : this.Cata,
  }
  console.log(a);
  this._api.edit_cata(a).subscribe(
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

  get_mech() {

  }

}
