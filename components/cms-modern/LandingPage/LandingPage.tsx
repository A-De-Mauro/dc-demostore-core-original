import React, { FC } from 'react'
import { CmsContent } from '@lib/cms/CmsContent';
import ContentBlock from '../ContentBlock';
import { Box, Typography } from '@mui/material';
import { nanoid } from 'nanoid'

interface Props {
    contentTypes: CmsContent[];
    seo:any;
}

const LandingPage: FC<Props> = ({contentTypes = [], seo = {}}) => {
    return <Box>
        <Typography variant='h1' component='h1'>
            {seo.title}
        </Typography>
        <Typography variant='body1' component='p'>
            {seo.description}
        </Typography>
        {
            contentTypes.map(item => {
                return <Box key={nanoid()}>
                    <ContentBlock content={item} />
                </Box>;
            })
        }
    </Box>;
}

export default LandingPage;