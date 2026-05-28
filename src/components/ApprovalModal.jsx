import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

const DECISION_FIELDS = {
  APPROVED: [
    { key: 'approvedLimit',       label: 'Approved Limit (IDR)', type: 'number' },
    { key: 'approvedTenorInMonth',label: 'Tenor Disetujui (Bulan)', type: 'number' },
    { key: 'approvalNotes',       label: 'Catatan Persetujuan', type: 'textarea' },
  ],
  REJECTED: [
    { key: 'rejectionReason', label: 'Alasan Penolakan', type: 'textarea' },
  ],
  INTEGRATED_APPROVAL_SYSTEM: [
    { key: 'surveyDate',    label: 'Tanggal Survey', type: 'date' },
    { key: 'surveyOfficer', label: 'Officer Survey', type: 'text' },
    { key: 'approvalNotes', label: 'Catatan',        type: 'textarea' },
  ],
};

const DECISION_META = {
  APPROVED:                   { label: 'Setujui',       buttonVariant: 'teal',   title: 'Persetujuan Pinjaman' },
  REJECTED:                   { label: 'Tolak',         buttonVariant: 'danger', title: 'Penolakan Pinjaman'   },
  INTEGRATED_APPROVAL_SYSTEM: { label: 'Integrated',   buttonVariant: 'accent', title: 'Integrated Approval'  },
};

export function ApprovalModal({ loanId, customerName, decision, onConfirm, onClose }) {
  const [values, setValues] = useState({});

  if (!decision) return null;

  const fields = DECISION_FIELDS[decision] ?? [];
  const meta   = DECISION_META[decision];

  const set = (key, value) => setValues((prev) => ({ ...prev, [key]: value }));

  const handleConfirm = () => onConfirm?.({ loanId, decision, ...values });

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title" id="modal-title">{meta.title}</h2>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Tutup modal">✕</button>
        </div>

        <div className="modal-body">
          {customerName && (
            <p className="modal-loan-info">
              Loan <strong>{loanId}</strong> — <span className="modal-customer-name">{customerName}</span>
            </p>
          )}

          <div className="modal-fields">
            {fields.map((field) => (
              <div key={field.key} className="form-field">
                <label className="form-field-label" htmlFor={`modal-${field.key}`}>
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={`modal-${field.key}`}
                    className="form-input form-textarea"
                    rows={3}
                    value={values[field.key] ?? ''}
                    onChange={(e) => set(field.key, e.target.value)}
                  />
                ) : (
                  <input
                    id={`modal-${field.key}`}
                    type={field.type}
                    className="form-input"
                    value={values[field.key] ?? ''}
                    onChange={(e) => set(field.key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <Button label="Batal"   variant="ghost"              onClick={onClose}   />
          <Button label={meta.label} variant={meta.buttonVariant} onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
}

ApprovalModal.propTypes = {
  loanId:       PropTypes.string,
  customerName: PropTypes.string,
  decision:     PropTypes.oneOf(['APPROVED', 'REJECTED', 'INTEGRATED_APPROVAL_SYSTEM']),
  onConfirm:    PropTypes.func,
  onClose:      PropTypes.func,
};
