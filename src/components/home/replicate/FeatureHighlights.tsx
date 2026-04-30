import { AccessTime, DesktopWindows, MonitorHeart, Psychology } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const items = [
  { icon: <Psychology />, title: 'Custom-designed from patient anatomy', body: 'CBCT + intraoral scan driven precision.' },
  { icon: <AccessTime />, title: 'Immediate placement workflow', body: 'One-appointment tooth replacement.' },
  { icon: <MonitorHeart />, title: 'For specialists and general dentists', body: 'Simple workflow. Broad clinical fit.' },
  { icon: <DesktopWindows />, title: 'Browser-based design portal', body: 'Secure, scalable, and accessible anywhere.' },
];

export function FeatureHighlights() {
  return (
    <HomeSection backgroundColor="#FFFFFF">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, border: '1px solid #DDE8F7', borderRadius: 2, overflow: 'hidden' }}>
        {items.map((item, index) => (
          <Box key={item.title} sx={{ p: 2.5, borderRight: { md: index === items.length - 1 ? 'none' : '1px solid #DDE8F7' }, borderBottom: { xs: index < 3 ? '1px solid #DDE8F7' : 'none', sm: index < 2 ? '1px solid #DDE8F7' : 'none', md: 'none' } }}>
            <Box sx={{ color: '#55B4DF', mb: 1 }}>{item.icon}</Box>
            <Typography sx={{ color: '#0A2359', fontWeight: 700, fontSize: '0.95rem', mb: 0.6 }}>{item.title}</Typography>
            <Typography sx={{ color: '#4C5F7E', fontSize: '0.9rem' }}>{item.body}</Typography>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
