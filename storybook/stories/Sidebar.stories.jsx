import { Sidebar } from '../../src/components/Sidebar';

const meta = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    activeItem: 'dashboard',
    brandName:  'FIF Finance',
  },
};

export default meta;

export const Default = {};

export const CreateLoanActive = { args: { activeItem: 'create-loan' } };

export const ApprovalQueueActive = { args: { activeItem: 'approval-queue' } };
