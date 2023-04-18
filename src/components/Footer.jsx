import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <React.Fragment>
      <Container fixed>
        <Box>
          <Typography variant="subtitle2">Powered by Carlos Uriel Ventura Pérez. <Link href="https://github.com/urielventuraperez/my-simple-chat" target='_blank'>Check the repo</Link></Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
