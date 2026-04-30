import { AutoFixHigh, HealthAndSafety, NoCrash, Timer } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const benefits = [
  { icon: <NoCrash />, title: 'No drilling', body: 'Preserves anatomy and healthy bone.' },
  { icon: <AutoFixHigh />, title: 'Natural tooth-like shape', body: 'Anatomically designed for function and esthetics.' },
  { icon: <HealthAndSafety />, title: 'No damage to healthy teeth', body: 'Unlike bridges, preserve what is healthy.' },
  { icon: <Timer />, title: 'Designed for one-visit placement', body: 'Less time in the chair. Faster return to life.' },
];

export function BenefitsYourPatientsWillFeel() {
  return (
    <HomeSection title="Benefits Your Patients Will Feel" backgroundColor="#FFFFFF">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
        {benefits.map((benefit) => (
          <Box key={benefit.title} sx={{ border: '1px solid #DDE8F7', borderRadius: 2, p: 2.1 }}>
            <Box sx={{ color: '#55B4DF', mb: 1 }}>{benefit.icon}</Box>
            <Typography sx={{ color: '#0A2359', fontWeight: 700, mb: 0.6 }}>{benefit.title}</Typography>
            <Typography sx={{ color: '#4C5F7E', fontSize: '0.92rem' }}>{benefit.body}</Typography>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
