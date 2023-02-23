import React from 'react';
import { Stack, Typography } from '@mui/system';

import Icon from '../assets/icons/gym.png'

const BodyPart = () => {
  return (
    <Stack>
        <img src={Icon} alt="dumbbell" styles={{ width: '40px', heigth: '40px'}}/>
    </Stack>
  )
}

export default BodyPart