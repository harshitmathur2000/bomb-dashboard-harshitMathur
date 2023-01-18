import React, {useCallback, useMemo, useState} from 'react';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import { Box, Card, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { useWallet } from 'use-wallet';
import moment from 'moment';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
      height: '100%',
      [theme.breakpoints.up('md')]: {
        height: '90px',
      },
    },
  }));

const Summary: React.FC = () => {
    const classes = useStyles();
    const currentEpoch = useCurrentEpoch();
    const { to } = useTreasuryAllocationTimes();

    return (
        <Grid>
                <Typography style={{color: '#f9d749', textAlign: 'center' }}>Bomb Finance Summary</Typography>
            
              <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
                <Card className={classes.gridItem}>
                  <CardContent style={{ textAlign: 'center',color: 'white'  }}>
                    <Typography style={{ textTransform: 'uppercase', color: '#f9d749' }}>Current Epoch</Typography>
                    <Typography>{Number(currentEpoch)}</Typography>
                    <hr  style={{
                        color: 'white',
                        backgroundColor: 'white',
                        height: .1,
                        borderColor : 'white'
                    }}/>
                  </CardContent>
                </Card>

                <Card className={classes.gridItem}>
                  <CardContent style={{ textAlign: 'center',color: 'white' }}>
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
                    <Typography style={{ textTransform: 'uppercase', color: '#f9d749' }}>Next Epoch</Typography>
                  </CardContent>
                </Card>
              </Grid>

        </Grid>
    );
  };



export default Summary;
