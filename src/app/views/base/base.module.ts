// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { ThermalPrintModule } from 'ng-thermal-print';


import { DataTableModule } from 'ng-angular8-datatable';

import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

// Forms Component
import { FormsComponent } from './forms.component';


import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SelectDropDownModule } from 'ngx-select-dropdown'

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';


// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { NotificationComponent } from './notification/notification.component';
import { MaildetailsComponent } from './maildetails/maildetails.component';
import { CompanytypeComponent } from './master/companytype/companytype.component';
import { SubscribertypeComponent } from './master/subscribertype/subscribertype.component';
import { ViewmaildetailsComponent } from './viewmaildetails/viewmaildetails.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerModule,
    ThermalPrintModule,
    FormsModule,
    SelectDropDownModule,
    DataTableModule,
    Ng2SearchPipeModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    DialogModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule
  ],
  declarations: [

    FormsComponent,
    TablesComponent,
    CompanydetailsComponent,
    PaymentdetailsComponent,
    SubscribersComponent,
    NotificationComponent,
    MaildetailsComponent,
    CompanytypeComponent,
    SubscribertypeComponent,
    ViewmaildetailsComponent,
  ]
})
export class BaseModule { }
