import { ApprovalModal } from '../../src/components/ApprovalModal';

const sharedArgs = {
  loanId:       'LN-20250701-001',
  customerName: 'Budi Santoso',
  onClose:      () => {},
};

const meta = {
  title: 'Loan/ApprovalModal',
  component: ApprovalModal,
  tags: ['autodocs'],
  args: { ...sharedArgs, decision: 'APPROVED' },
};

export default meta;

export const Approve = {};

export const Reject = { args: { decision: 'REJECTED' } };

export const Integrated = { args: { decision: 'INTEGRATED_APPROVAL_SYSTEM' } };
