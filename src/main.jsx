import React from 'react';
import { createRoot } from 'react-dom/client';
import { CoverSlide } from './components/CoverSlide';
import { sampleAgenda } from './components/sampleData';
import { LoginForm } from './components/LoginForm';
import { RealtimeIndicator } from './components/RealtimeIndicator';
import {ApprovalTimeline} from './components/ApprovalTimeline';
import {ApprovalModal} from './components/ApprovalModal';
import {LoanApplicationForm} from './components/LoanApplicationForm';
import {LoanTable} from './components/LoanTable';
import {Sidebar} from './components/Sidebar';
import {StatCard} from './components/StatCard';
import { StatusBadge } from './components/StatusBadge';
import {TableFilterBar} from './components/TableFilterBar';
import {TopNavbar} from './components/TopNavbar';
import {WorkflowStepper} from './components/WorkflowStepper';
import './styles/theme.css';

import {
  sampleDashboardStats,
  sampleLoanRows,
  sampleActiveStep,
  sampleTimelineEntries,
  sampleTimelineActiveStage,
  sampleLoanApplication,
  sampleCurrentUser,
  sampleLoanDetail,
} from './components/sampleData';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginForm
      title="Masuk ke Hati FIF"
      subtitle="Silakan masukkan username dan password Orang FIF."/>
    <ApprovalModal/>
    <ApprovalTimeline entries={sampleTimelineEntries} activeStage={sampleTimelineActiveStage} />
    <LoanApplicationForm initialValues={sampleLoanApplication} />
    <LoanTable rows={sampleLoanRows} />
    <Sidebar currentUser={sampleCurrentUser} />
    <StatCard title="Total Pinjaman" value="Rp 1,250,000,000" sub="Per Juli 2025" tone="default" icon="📊" />
    <StatusBadge label="UNDER_REVIEW" tone="accent" />
    <TableFilterBar filters={[{ label: 'Semua Status', value: '' }, { label: 'Disetujui', value: 'approved' }, { label: 'Ditolak', value: 'rejected' }]} />
    <TopNavbar currentUser={sampleCurrentUser} />
    <WorkflowStepper steps={['Pengajuan', 'Review', 'Approval', 'Pencairan']} activeStep={sampleActiveStep} />
    <RealtimeIndicator connectionState="reconnecting" />
  </React.StrictMode>
);