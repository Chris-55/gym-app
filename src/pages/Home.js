import React, {useState} from 'react';
import { Box } from '@mui/material';
import Excercises from '../components/Excercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <box>
       <HeroBanner />
       <SearchExercises />
       <Excercises />
    </box>
  )
}

export default Home