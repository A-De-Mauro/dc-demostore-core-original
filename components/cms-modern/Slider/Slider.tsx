import { FC, PropsWithChildren } from 'react'
import { 
    CarouselProvider, 
    Dot,
    Slider as PureSlider, 
    Slide } from 'pure-react-carousel';
import ContentBlock from '../ContentBlock';
import { Box, Theme } from '@mui/material';
import { withStyles, WithStyles } from '@mui/styles'
import clsx from 'clsx';
import SliderNextButton from './SliderNextButton';
import SliderBackButton from './SliderBackButton';

const styles = (theme: Theme) => ({
    root: {
    },
    dots: {
        backgroundColor: '#ccc', 
        '&:disabled': { 
            backgroundColor: '#999'
        }, 
        overflow: 'hidden',
        border: 0, 
        marginRight: 15, 
        width: 12, 
        height: 12, 
        borderRadius: '50%' 
    }
});

interface Props extends PropsWithChildren<WithStyles<typeof styles>> {
    className?: string;
    style?: React.CSSProperties;
    loop: boolean;
    navigationDots: boolean;
    slides: any[];
}

const Slider: FC<Props> = ({
        classes,
        className,
        loop = false, 
        navigationDots, 
        slides = []}) => {
    return (
        <Box className={clsx(classes.root, className)}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                visibleSlides={1}
                totalSlides={slides.length}
                infinite={loop}
                isPlaying={loop}
                interval={5000}
            >
                <PureSlider>
                    {
                        slides.map((slide: any, index: number) => {
                            return <Slide key={index} index={index}>
                                <ContentBlock content={slide} />
                            </Slide>
                        })
                    }
                </PureSlider>
                <SliderBackButton />
                <SliderNextButton />
                <Box style={{textAlign: 'center', paddingTop: 15, paddingBottom: 30}}>
                {
                    navigationDots &&
                        slides.map((slide: any, index: number) => {
                            return <Dot key={index} slide={index} className={classes.dots} ></Dot>
                        })
                }
                </Box>
            </CarouselProvider>
        </Box>
    )
}

export default withStyles(styles)(Slider);