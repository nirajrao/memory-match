import React, { useState } from 'react';

import { Card, CardContent } from '@material-ui/core';

import classes from './MemoryCard.module.sass';

interface Props {
    uid: number;
    gid: number;
    onClick?: () => void;
}

export const MemoryCard: React.FC<Props> = (props) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const { onClick } = props;
    return (
        <Card className={isClicked ? classes['Card--selected']: classes.Card} onClick={() => {
            setIsClicked(!isClicked);
            onClick?.();
            }}>
            <CardContent>
                <h1>1</h1>
            </CardContent>
        </Card>
    )
}

