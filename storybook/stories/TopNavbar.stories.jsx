import { TopNavbar } from '../../src/components/TopNavbar';

const meta = {
  title: 'Layout/TopNavbar',
  component: TopNavbar,
  tags: ['autodocs'],
  args: {
    pageTitle:         'Dashboard',
    userName:          'Budi Santoso',
    userRole:          'Branch Officer',
    notificationCount: 3,
  },
};

export default meta;

export const Default = {};

export const AnalystRole = {
  args: { userName: 'Dewi Rahayu', userRole: 'Analyst', pageTitle: 'Approval Queue', notificationCount: 0 },
};

export const NoNotifications = {
  args: { notificationCount: 0 },
};
