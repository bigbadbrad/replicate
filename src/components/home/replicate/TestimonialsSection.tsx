import { FormatQuote } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const testimonials = [
  {
    quote: 'Replicate has transformed how I treat patients. It is minimally invasive, efficient, and the outcomes are incredibly natural.',
    author: 'Dr. Jason Miller, DDS',
    role: 'Oral Surgeon',
  },
  {
    quote: 'I had a tooth replaced in one visit with no drilling. It feels and looks just like my natural tooth. I could not be happier.',
    author: 'Sarah L.',
    role: 'Replicate Patient',
  },
];

export function TestimonialsSection() {
  return (
    <HomeSection backgroundColor="#FFFFFF">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}>
        {testimonials.map((testimonial, index) => (
          <Box key={testimonial.author} sx={{ border: '1px solid #DDE8F7', borderRadius: 2, p: 2.2, display: 'flex', gap: 1.8, alignItems: 'flex-start' }}>
            <Avatar sx={{ bgcolor: index === 0 ? '#0C2A69' : '#2699D8', width: 52, height: 52 }}>{testimonial.author[0]}</Avatar>
            <Box>
              <FormatQuote sx={{ color: '#8FA8CA', mb: 0.3 }} />
              <Typography sx={{ color: '#24456F', fontSize: '0.96rem', lineHeight: 1.65, mb: 1.2 }}>{testimonial.quote}</Typography>
              <Typography sx={{ color: '#0A2359', fontSize: '0.92rem', fontWeight: 700 }}>{testimonial.author}</Typography>
              <Typography sx={{ color: '#5E7496', fontSize: '0.87rem' }}>{testimonial.role}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
