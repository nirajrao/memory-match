import React from 'react';

import { Box, Button, ButtonGroup, Container, Typography } from '@material-ui/core';

import { Spacer } from '../components/Spacer';

export const MainMenuContainer: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Box textAlign="center">
                <Spacer height={32} />
                <Typography variant="h1">Memory Match</Typography>
                <Spacer height={32} />
                <ButtonGroup orientation="vertical" color="primary" size="large" aria-label="small outlined button group">
                    <Button href="/game">Play</Button>
                    <Button>Chill</Button>
                </ButtonGroup>
            </Box>
        </Container>
    )
}



