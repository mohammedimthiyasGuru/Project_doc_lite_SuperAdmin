import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subscriber } from 'rxjs';
import { CompanydetailsComponent } from './companydetails/companydetails.component';


import { FormsComponent } from './forms.component';
import { MaildetailsComponent } from './maildetails/maildetails.component';
import { NotificationComponent } from './notification/notification.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { SubscribersComponent } from './subscribers/subscribers.component';


import { TablesComponent } from './tables.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Menu'
    },
    children: [
      {
        path: 'company_details',
        component: CompanydetailsComponent,
        data: {
          title: 'company details'
        }
      },
      {
        path: 'mail_details',
        component: MaildetailsComponent,
        data: {
          title: 'mail details'
        }
      },
      {
        path: 'notification_details',
        component: NotificationComponent,
        data: {
          title: 'notification details'
        }
      }, 
      {
        path: 'payment_details',
        component: PaymentdetailsComponent,
        data: {
          title: 'payment details'
        }
      },
      {
        path: 'subscriber_details',
        component: SubscribersComponent,
        data: {
          title: 'subscriber details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
