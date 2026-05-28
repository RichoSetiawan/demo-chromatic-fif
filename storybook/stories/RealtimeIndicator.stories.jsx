import { RealtimeIndicator } from '../../src/components/RealtimeIndicator';

const meta = {
  title: 'Loan/RealtimeIndicator',
  component: RealtimeIndicator,
  tags: ['autodocs'],
  args: { connectionState: 'connected' },
  parameters: { layout: 'padded' },
};

export default meta;

export const Connected = {};

export const Reconnecting = { args: { connectionState: 'reconnecting' } };

export const Offline = { args: { connectionState: 'offline' } };

export const AllStates = {
  render: () => (
    <div className="ui-inline-row" style={{ padding: 24, gap: 12 }}>
      <RealtimeIndicator connectionState="connected" />
      <RealtimeIndicator connectionState="reconnecting" />
      <RealtimeIndicator connectionState="offline" />
    </div>
  ),
};
