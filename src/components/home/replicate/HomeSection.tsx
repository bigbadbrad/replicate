import type { PropsWithChildren, ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';

interface HomeSectionProps extends PropsWithChildren {
  eyebrow?: string;
  title?: string;
  subtitle?: ReactNode;
  backgroundColor?: string;
}

export function HomeSection({ eyebrow, title, subtitle, backgroundColor = '#FFFFFF', children }: HomeSectionProps) {
  return (
    <Box component="section" sx={{ backgroundColor, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        {eyebrow ? (
          <Typography sx={{ color: '#3AA5D7', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1 }}>
            {eyebrow}
          </Typography>
        ) : null}
        {title ? (
          <Typography component="h2" sx={{ color: '#0A2359', fontSize: { xs: '1.8rem', md: '2.2rem' }, fontWeight: 700, mb: 1 }}>
            {title}
          </Typography>
        ) : null}
        {subtitle ? (
          <Typography sx={{ color: '#4C5F7E', fontSize: '1rem', lineHeight: 1.6, maxWidth: 700, mb: 4 }}>
            {subtitle}
          </Typography>
        ) : null}
        {children}
      </Container>
    </Box>
  );
}
