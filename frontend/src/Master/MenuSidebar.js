import {
  dashboard_icon,
  transaction_icon,
  invoice_icon,
  userClient_icon,
  hotel_icon,
  profile_icon,
  help_icon,
  notification_icon,
  airlines_icon,
} from '../Assets';

const MenuSidebar = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard/home',
    icon: dashboard_icon,
  },
  {
    id: 2,
    name: 'Transaction',
    path: '/dashboard/transaction',
    icon: transaction_icon,
  },
  {
    id: 3,
    name: 'Invoice',
    path: '/dashboard/invoice',
    icon: invoice_icon,
  },
  {
    id: 4,
    name: 'User',
    path: '/dashboard/user',
    icon: userClient_icon,
  },
];

const Master = [
  {
    id: 5,
    name: ' Master Hotel',
    path: '/dashboard/masterHotel',
    icon: hotel_icon,
  },
  {
    id: 6,
    name: 'Master Airlines',
    path: '/dashboard/masterAirlines',
    icon: airlines_icon,
  },
];

const Setting = [
  {
    id: 7,
    name: 'Notification',
    path: '/dashboard/notification',
    icon: notification_icon,
  },
  {
    id: 8,
    name: 'Profile',
    path: '/dashboard/profile',
    icon: profile_icon,
  },
  {
    id: 9,
    name: 'Help',
    path: '/dashboard/help',
    icon: help_icon,
  },
];

export  { MenuSidebar, Master, Setting };
