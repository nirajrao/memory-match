import React from 'react';

import { Box } from '@material-ui/core';

interface Props {
    height: number
}

export const Spacer: React.FC<Props> = (props) => {
    const { height } = props;
    return <Box paddingTop={height / 4}/>
}

