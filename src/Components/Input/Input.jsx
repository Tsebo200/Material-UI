import React from 'react'
import styles from './Input.module.scss'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Button, FormControl, InputAdornment, inputBaseClasses, TextField } from '@mui/material';
import HoverRating from '../Rating/Rating';
import { pink } from '@mui/material/colors';

function Input() {
  return (
    <div>
      <div className={styles.firstBox}>
      <div className={styles.mainContainer}>
    <Grid container spacing={1}>
      <div className={styles.formContainer}>
    <Grid size={12}>
      <div className={styles.ratingContainer}>
        <h3>Please Rate Our Services</h3>
        <HoverRating/>
      </div>
       
      <Item>
          <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
          color="secondary"
          id="outlined-suffix-shrink"
          label="Name"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  lg={{
                    opacity: 0,
                    pointerEvents: 'none',
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                </InputAdornment>
              ),
            },
          }}
        />
        </FormControl>
     </Item>

     <Item>
          <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
          color="secondary"
          id="outlined-suffix-shrink"
          label="Email"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  lg={{
                    opacity: 0,
                    pointerEvents: 'none',
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                </InputAdornment>
              ),
            },
          }}
        />
        </FormControl>
     </Item>

      <Item>
          <FormControl fullWidth sx={{ m: 1 }}>
            <Button sx={{ backgroundColor: pink[500]}} variant="contained">Subscribe To Newsletter</Button>
          </FormControl>
      </Item>
<p>We respect your privacy. Unsubscribe at any time.</p>

      </Grid>
      </div>
      </Grid>

      </div>
    </div>
    </div>
  )
}

export default Input