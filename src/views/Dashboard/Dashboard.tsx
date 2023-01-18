import { styled } from '@material-ui/styles';
import React, { useCallback, useMemo } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import HomeImage from '../../assets/img/background.jpg';
import { Helmet } from 'react-helmet';
import { Box, Card, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';
import ProgressCountdown from '../Boardroom/components/ProgressCountdown';
import Summary from './components/financeSummary';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../hooks/useTreasuryAllocationTimes';
const TITLE = 'bomb.money | Dashboard'

const Dashboard: React.FC = () => {
    const { path } = useRouteMatch();
    const { to } = useTreasuryAllocationTimes();
    return ( 
        <Page>
            
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Summary/>
        </Page>
    );
};

export default Dashboard;