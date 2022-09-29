import React from 'react';
import { Theme } from '@mui/material';
import { withStyles, WithStyles } from '@mui/styles'

import { ButtonNext } from 'pure-react-carousel';
import { NavigateNext } from '@components/icons';
import clsx from 'clsx';

const styles = (theme: Theme) => ({
    root: {
        display: 'contents'
    },
    icon: {
        cursor: 'pointer',
        width: 40,
        height: 40,
        fill: '#fff',
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute' as 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)'
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
}

const SliderNextButton: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        ...other
    } = props;

    return (
        <ButtonNext className={clsx(classes.root, className)} {...other}>
            <NavigateNext className={classes.icon} />
        </ButtonNext>
    );
};

export default withStyles(styles)(SliderNextButton);