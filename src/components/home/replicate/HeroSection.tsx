import Image from 'next/image';
import { ArrowForward, PlayCircleOutline } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export function HeroSection() {
  return (
    <Box component="section" sx={{ background: 'linear-gradient(180deg, #F8FBFF 0%, #EEF5FF 100%)', pt: { xs: 10, md: 12 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, gap: { xs: 5, md: 4 }, alignItems: 'center' }}>
          <Box>
            <Typography sx={{ color: '#3AA5D7', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5 }}>
              The Replicate System
            </Typography>
            <Typography component="h1" sx={{ color: '#0A2359', fontSize: { xs: '2.2rem', md: '3.4rem' }, lineHeight: 1.1, fontWeight: 700, maxWidth: 640 }}>
              Custom tooth replacement.
              <br />
              Designed from the anatomy
              <br />
              of <Box component="span" sx={{ color: '#2385D3' }}>every patient.</Box>
            </Typography>
            <Typography sx={{ color: '#4C5F7E', fontSize: '1.05rem', lineHeight: 1.7, mt: 2.5, maxWidth: 560 }}>
              Scan-based. Patient-specific. Placed immediately. A natural alternative to implants and bridges without drilling, fewer surgeries, and one-appointment placement.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" endIcon={<ArrowForward />} sx={{ bgcolor: '#0C2A69', borderRadius: 7, px: 3.5, py: 1.3, textTransform: 'none', '&:hover': { bgcolor: '#15387D' } }}>
                Request a Demo
              </Button>
              <Button variant="outlined" endIcon={<PlayCircleOutline />} sx={{ borderColor: '#89A5CC', color: '#0C2A69', borderRadius: 7, px: 3.5, py: 1.3, textTransform: 'none' }}>
                See How It Works
              </Button>
            </Stack>
          </Box>
          <Box sx={{ position: 'relative', minHeight: { xs: 260, md: 420 }, borderRadius: 3, overflow: 'hidden', background: 'radial-gradient(circle at 20% 30%, #FFFFFF 0%, #DCEAFF 65%, #BBD3F7 100%)' }}>
            <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(140deg, rgba(255,255,255,0.6), rgba(125,159,223,0.15))' }} />
            <Image src="/replicate-icon.svg" alt="Replicate restoration visual placeholder" width={120} height={120} style={{ position: 'absolute', top: 30, left: 28, opacity: 0.9 }} />
            <Typography sx={{ position: 'absolute', right: 24, bottom: 26, fontSize: '0.9rem', color: '#2A4F88', bgcolor: 'rgba(255,255,255,0.82)', px: 1.2, py: 0.5, borderRadius: 1.5 }}>
              Hero image placeholder
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
