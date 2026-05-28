import { LoanApplicationForm } from '../../src/components/LoanApplicationForm';

const meta = {
  title: 'Loan/LoanApplicationForm',
  component: LoanApplicationForm,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const Empty = {};

export const PreFilled = {
  args: {
    initialValues: {
      dataSource: 'INTERNAL',
      customerId: 'CUST-20250701',
      loanDetail: {
        lob: 'FIFASTRA',
        product: { code: 'PRD-001', name: 'KPM Reguler' },
        amount: '25000000',
        tenorInMonth: '24',
      },
      customerData: {
        nik: { value: '3175010101900001', isEncrypted: false },
        nama: 'Budi Santoso',
        motherMaidenName: 'Sri Wahyuni',
        income: { amount: '8000000', currency: 'IDR' },
        dependentCount: '2',
        birthDate: '1990-01-01',
        birthPlace: 'Jakarta',
        phoneNumber: { countryCode: '+62', value: '081234567890' },
        address: {
          street: 'Jl. Merdeka No. 10',
          city: 'Jakarta Pusat',
          province: 'DKI Jakarta',
          postalCode: '10110',
        },
      },
      branchInformation: { branchId: 'BR-JKT-001' },
      notes: 'Pengajuan prioritas nasabah existing.',
    },
  },
};
