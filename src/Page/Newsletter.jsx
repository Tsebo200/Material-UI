import React from 'react'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'; 
import Input from '../Components/Input/Input';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './Newsletter.module.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Newsletter() {
  return (
    <>
    <div className={styles.mainContainer}>
    <Grid container spacing={1}>
        <Grid size={12}>
            <Item>
            <EmailOutlinedIcon sx={{ color: pink[500], fontSize: 40 }}   />
            <h1>Stay In The Loop</h1>
            <p>Subscribe to our newsletter for the latest updates, exclusive content, and special offers.</p>
            </Item>
            <Item>
              <Input/>
            </Item>
        </Grid>
   </Grid>
    </div>
    </>
  )
}

export default Newsletter




