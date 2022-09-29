import React, { FC } from 'react'
import { CmsContent } from '@lib/cms/CmsContent';
import ContentBlock from '../ContentBlock';
import { CmsHierarchyNode } from '@lib/cms/fetchHierarchy';
import { WithCMSTheme, useThemes } from '@components/core/WithCMSTheme';
import { Box } from '@mui/material';
import { nanoid } from 'nanoid'

interface Props {
    theme: CmsHierarchyNode;
    components: CmsContent[];
}

const ThemeWrapper: FC<Props> = ({theme, components = []}) => {
    const { themes } = useThemes();

    return <WithCMSTheme themes={themes} themeOverride={theme}>
                <Box>
                    {
                        components.map(item => {
                            return <Box key={nanoid()}>
                                <ContentBlock content={item} />
                            </Box>;
                        })
                    }
                </Box>
            </WithCMSTheme> 
}

export default ThemeWrapper;