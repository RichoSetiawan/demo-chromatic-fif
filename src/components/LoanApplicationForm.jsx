import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

const LOB_OPTIONS = ['FIFASTRA', 'SPEKTRA', 'DANASTRA', 'FINATRA', 'AMITRA'];

const INITIAL_STATE = {
  dataSource: '',
  customerId: '',
  loanDetail: {
    lob: '',
    product: { code: '', name: '' },
    amount: '',
    tenorInMonth: '',
  },
  customerData: {
    nik: { value: '', isEncrypted: false },
    nama: '',
    motherMaidenName: '',
    income: { amount: '', currency: 'IDR' },
    dependentCount: '',
    birthDate: '',
    birthPlace: '',
    phoneNumber: { countryCode: '+62', value: '' },
    address: { street: '', city: '', province: '', postalCode: '' },
  },
  branchInformation: { branchId: '' },
  notes: '',
};

function FormField({ label, children, required, hint }) {
  return (
    <div className="form-field">
      <label className="form-field-label">
        {label}
        {required && <span className="form-field-required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && <p className="form-field-hint">{hint}</p>}
    </div>
  );
}

FormField.propTypes = {
  label:    PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  hint:     PropTypes.string,
};

function SectionCard({ title, icon, children, collapsible = false }) {
  const [open, setOpen] = useState(true);

  return (
    <section className="form-section-card">
      <button
        type="button"
        className="form-section-header"
        onClick={() => collapsible && setOpen((v) => !v)}
        aria-expanded={open}
      >
        {icon && <span className="form-section-icon" aria-hidden="true">{icon}</span>}
        <span className="form-section-title">{title}</span>
        {collapsible && <span className="form-section-chevron" aria-hidden="true">{open ? '▲' : '▼'}</span>}
      </button>
      {open && <div className="form-section-body">{children}</div>}
    </section>
  );
}

SectionCard.propTypes = {
  title:       PropTypes.string.isRequired,
  icon:        PropTypes.string,
  children:    PropTypes.node.isRequired,
  collapsible: PropTypes.bool,
};

export function LoanApplicationForm({ onSubmit, initialValues }) {
  const [values, setValues] = useState({ ...INITIAL_STATE, ...initialValues });

  const setPath = (path, value) => {
    setValues((prev) => {
      const next = structuredClone(prev);
      const keys = path.split('.');
      let cursor = next;
      for (let i = 0; i < keys.length - 1; i++) cursor = cursor[keys[i]];
      cursor[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const input = (path, type = 'text', placeholder = '') => (
    <input
      type={type}
      className="form-input"
      placeholder={placeholder}
      value={path.split('.').reduce((o, k) => o?.[k], values) ?? ''}
      onChange={(e) => setPath(path, e.target.value)}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <form className="loan-application-form" onSubmit={handleSubmit} noValidate>

      {/* ── Root fields ── */}
      <SectionCard title="Informasi Umum" icon="📋">
        <div className="form-grid-2">
          <FormField label="Data Source" required>
            {input('dataSource', 'text', 'e.g. INTERNAL')}
          </FormField>
          <FormField label="Customer ID">
            {input('customerId', 'text', 'e.g. CUST-001')}
          </FormField>
        </div>
      </SectionCard>

      {/* ── Loan Detail ── */}
      <SectionCard title="Loan Detail" icon="💰">
        <div className="form-grid-2">
          <FormField label="Line of Business (LOB)" required>
            <select
              className="form-input"
              value={values.loanDetail.lob}
              onChange={(e) => setPath('loanDetail.lob', e.target.value)}
            >
              <option value="">Pilih LOB</option>
              {LOB_OPTIONS.map((lob) => (
                <option key={lob} value={lob}>{lob}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Product Code">
            {input('loanDetail.product.code', 'text', 'e.g. PRD-001')}
          </FormField>
          <FormField label="Product Name">
            {input('loanDetail.product.name', 'text', 'e.g. KPM Reguler')}
          </FormField>
          <FormField label="Amount (IDR)" required>
            {input('loanDetail.amount', 'number', '0')}
          </FormField>
          <FormField label="Tenor (Bulan)" required>
            {input('loanDetail.tenorInMonth', 'number', '12')}
          </FormField>
        </div>
      </SectionCard>

      {/* ── Customer Data ── */}
      <SectionCard title="Data Nasabah" icon="👤" collapsible>
        <div className="form-grid-2">
          <FormField label="NIK" required hint="Nomor Induk Kependudukan">
            <div className="form-nik-row">
              {input('customerData.nik.value', 'text', '16 digit NIK')}
              <label className="form-checkbox-label">
                <input
                  type="checkbox"
                  checked={values.customerData.nik.isEncrypted}
                  onChange={(e) => setPath('customerData.nik.isEncrypted', e.target.checked)}
                />
                <span className="ui-badge ui-badge-teal form-encrypted-badge">🔒 Encrypted</span>
              </label>
            </div>
          </FormField>
          <FormField label="Nama Lengkap" required>
            {input('customerData.nama', 'text', 'Nama sesuai KTP')}
          </FormField>
          <FormField label="Nama Ibu Kandung">
            {input('customerData.motherMaidenName', 'text', 'Nama gadis ibu')}
          </FormField>
          <FormField label="Tanggal Lahir" required>
            {input('customerData.birthDate', 'date')}
          </FormField>
          <FormField label="Tempat Lahir">
            {input('customerData.birthPlace', 'text', 'Kota kelahiran')}
          </FormField>
          <FormField label="Jumlah Tanggungan">
            {input('customerData.dependentCount', 'number', '0')}
          </FormField>
        </div>

        <div className="form-subsection-title">Pendapatan</div>
        <div className="form-grid-2">
          <FormField label="Jumlah Pendapatan" required>
            {input('customerData.income.amount', 'number', '0')}
          </FormField>
          <FormField label="Mata Uang">
            <select
              className="form-input"
              value={values.customerData.income.currency}
              onChange={(e) => setPath('customerData.income.currency', e.target.value)}
            >
              <option value="IDR">IDR</option>
              <option value="USD">USD</option>
            </select>
          </FormField>
        </div>

        <div className="form-subsection-title">Nomor Telepon</div>
        <div className="form-grid-2">
          <FormField label="Kode Negara">
            {input('customerData.phoneNumber.countryCode', 'text', '+62')}
          </FormField>
          <FormField label="Nomor Telepon" required>
            {input('customerData.phoneNumber.value', 'tel', '08xxxxxxxxxx')}
          </FormField>
        </div>

        <div className="form-subsection-title">Alamat</div>
        <div className="form-grid-2">
          <FormField label="Jalan" required>
            {input('customerData.address.street', 'text', 'Nama jalan dan nomor')}
          </FormField>
          <FormField label="Kota">
            {input('customerData.address.city', 'text', 'Kota')}
          </FormField>
          <FormField label="Provinsi">
            {input('customerData.address.province', 'text', 'Provinsi')}
          </FormField>
          <FormField label="Kode Pos">
            {input('customerData.address.postalCode', 'text', '00000')}
          </FormField>
        </div>
      </SectionCard>

      {/* ── Branch Information ── */}
      <SectionCard title="Informasi Cabang" icon="🏢">
        <div className="form-grid-2">
          <FormField label="Branch ID" required>
            {input('branchInformation.branchId', 'text', 'e.g. BR-JKT-001')}
          </FormField>
        </div>
      </SectionCard>

      {/* ── Notes ── */}
      <SectionCard title="Catatan Tambahan" icon="📝">
        <FormField label="Catatan">
          <textarea
            className="form-input form-textarea"
            placeholder="Catatan opsional dari officer..."
            rows={4}
            value={values.notes}
            onChange={(e) => setPath('notes', e.target.value)}
          />
        </FormField>
      </SectionCard>

      <div className="form-actions">
        <Button label="Reset" variant="ghost" type="reset" onClick={() => setValues(INITIAL_STATE)} />
        <Button label="Ajukan Pinjaman" variant="accent" type="submit" />
      </div>
    </form>
  );
}

LoanApplicationForm.propTypes = {
  onSubmit:      PropTypes.func,
  initialValues: PropTypes.object,
};
