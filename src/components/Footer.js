import React from 'react';
import { Box, Stack, Typography, Link  } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" allignItems="center" px="60px" pt="24px">
      <Link href="https://github.com/Chris-55/gym-app" target="_blank" rel="noreferrer" > Click to visit github</Link>
      </Stack>
    </Box>
  )
}

export default Footer