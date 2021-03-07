import React from 'react';

import { Box, Container, Typography, Button, ButtonGroup } from '@material-ui/core';

import { Spacer } from '../components/Spacer';

export const Success: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Box textAlign="center">
                <Spacer height={32} />
                <Typography variant="h1">Thanks for playing!</Typography>
                <Spacer height={32} />
                <ButtonGroup orientation="vertical" color="primary" size="large" aria-label="small outlined button group">
                    <Button href="/game/sloths">Play Again</Button>
                    <Button href="/">Back to Main Menu</Button>
                </ButtonGroup>
            </Box>
        </Container>
    )
}
