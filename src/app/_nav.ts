import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Company Details',
    url: '/base/company_details',
    icon: 'icon-speedometer',
  },
  {
    name: 'Subscriber Details',
    url: '/base/subscriber_details',
    icon: 'icon-speedometer',
  },
  {
    name: 'Payment Details',
    url: '/base/payment_details',
    icon: 'icon-speedometer',
  },
  {
    name: 'Notification Details',
    url: '/base/notification_details',
    icon: 'icon-speedometer',
  },
  {
    name: 'Mail Details',
    url: '/base/mail_details',
    icon: 'icon-speedometer',
  },
  {
    name: 'Master',
    url: '/base',
    icon: 'icon-speedometer',
    children: [ 
      {
        name: 'Company type',
        url: '/base/master/companytype',
        icon: 'icon-star'
      },
      {
        name: 'Subscriber type',
        url: '/base/master/subscribertype',
        icon: 'icon-star'
      },
    ]


  },
];
