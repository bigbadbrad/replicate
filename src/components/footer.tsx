'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const links = ['Solution', 'How It Works', 'Clinical Benefits', 'For Dentists', 'Company', 'Privacy Policy', 'Terms of Use', 'Contact'];

export function Footer() {
  return (
    <Box component="footer" sx={{ color: '#FFFFFF', background: 'linear-gradient(90deg, #071D4E 0%, #06255E 40%, #0A4A7F 100%)' }}>
      <Box sx={{ maxWidth: 1220, mx: 'auto', px: { xs: 2, md: 3 }, py: 4.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mb: 2.2 }}>
          <Image src="/replicate-icon.svg" alt="Replicate icon" width={46} height={46} />
          <Image src="/replicate-logo.svg" alt="Replicate" width={260} height={47} style={{ height: 36, width: 'auto', filter: 'brightness(0) invert(1)' }} />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.2, mb: 1.8 }}>
          {links.map((item) => (
            <Typography key={item} component={Link} href="#" sx={{ color: '#DFEAFF', fontSize: '0.86rem', textDecoration: 'none' }}>
              {item}
            </Typography>
          ))}
        </Box>
        <Typography sx={{ color: '#BFD4F7', fontSize: '0.82rem' }}>
          The Replicate System is not available for distribution in the U.S.
        </Typography>
      </Box>
    </Box>
  );
}
