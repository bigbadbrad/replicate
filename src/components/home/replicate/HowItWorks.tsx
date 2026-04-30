import { AssignmentTurnedIn, CloudUpload, MedicalServices, Monitor } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const steps = [
  { icon: <CloudUpload />, title: 'Scan & Submit', body: 'Send CBCT + intraoral scan through our portal.' },
  { icon: <Monitor />, title: 'Review & Approve', body: 'We design your custom tooth replacement.' },
  { icon: <MedicalServices />, title: 'Extract & Place', body: 'Remove the tooth and place immediately.' },
  { icon: <AssignmentTurnedIn />, title: 'Heal & Restore', body: 'Osseointegrates naturally. Restore with confidence.' },
];

export function HowItWorks() {
  return (
    <HomeSection title="How It Works" backgroundColor="#FFFFFF">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
        {steps.map((step, index) => (
          <Box key={step.title} sx={{ border: '1px solid #DDE8F7', borderRadius: 2, p: 2.2, position: 'relative' }}>
            <Typography sx={{ position: 'absolute', top: 10, right: 12, color: '#9EB6D8', fontWeight: 700 }}>{index + 1}</Typography>
            <Box sx={{ color: '#55B4DF', mb: 1 }}>{step.icon}</Box>
            <Typography sx={{ color: '#0A2359', fontWeight: 700, mb: 0.6 }}>{step.title}</Typography>
            <Typography sx={{ color: '#4C5F7E', fontSize: '0.92rem' }}>{step.body}</Typography>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
