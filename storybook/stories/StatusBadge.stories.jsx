import { StatusBadge } from '../../src/components/StatusBadge';

const meta = {
  title: 'Loan/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  args: { status: 'PENDING' },
};

export default meta;

export const Pending = {};

export const Verifying = { args: { status: 'VERIFYING' } };

export const UnderReview = { args: { status: 'UNDER_REVIEW' } };

export const Approved = { args: { status: 'APPROVED' } };

export const Rejected = { args: { status: 'REJECTED' } };

export const IntegratedApproval = { args: { status: 'INTEGRATED_APPROVAL_SYSTEM' } };

export const AllStatuses = {
  render: () => (
    <div className="ui-inline-row" style={{ padding: 24, gap: 12, flexWrap: 'wrap' }}>
      {['PENDING','VERIFYING','UNDER_REVIEW','APPROVED','REJECTED','INTEGRATED_APPROVAL_SYSTEM'].map((s) => (
        <StatusBadge key={s} status={s} />
      ))}
    </div>
  ),
};
