import { WorkflowStepper } from '../../src/components/WorkflowStepper';

const meta = {
  title: 'Loan/WorkflowStepper',
  component: WorkflowStepper,
  tags: ['autodocs'],
  args: { activeStep: 'SCORING' },
  parameters: { layout: 'padded' },
};

export default meta;

export const Default = {};

export const AtDukcapil = { args: { activeStep: 'DUKCAPIL' } };

export const AtSlik     = { args: { activeStep: 'SLIK' } };

export const AtAnalyst  = { args: { activeStep: 'ANALYST' } };

export const Completed  = { args: { activeStep: 'COMPLETED' } };
