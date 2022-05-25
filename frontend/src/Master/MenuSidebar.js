import {
  dashboard_icon,
  transaction_icon,
  invoice_icon,
  userClient_icon,
  bank_icon,
  hotel_icon,
  profile_icon,
  help_icon,
  notification_icon,
  airlines_icon
} from '../Assets';

const MenuSidbar = [
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
    path: '/dashboard/home',
    icon: userClient_icon,
  },
];

const Master = [
  {
    id: 1,
    name: ' Master Hotel',
    path: '/dashboard/masterHotel',
    icon: hotel_icon,
  },
  {
    id: 2,
    name: 'Master Airlines',
    path: '/dashboard/masterAirlines',
    icon: airlines_icon,
  },
];

const Setting = [
  {
    id: 1,
    name: 'Notification',
    path: '/dashboard/notification',
    icon: notification_icon,
  },
  {
    id: 2,
    name: 'Profile',
    path: '/dahboard/profile',
    icon: profile_icon,
  },
  {
    id: 3,
    name: 'Help',
    path: '/dashboard/help',
    icon: help_icon,
  },
];

export { MenuSidbar, Master, Setting };
