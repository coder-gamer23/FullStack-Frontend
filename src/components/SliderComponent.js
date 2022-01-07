import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  },
  {
    imgPath:
      'https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1120x1120.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress',
  },
  {
    imgPath:
      'https://ak.picdn.net/shutterstock/videos/26388761/thumb/1.jpg',
  },
  {
    imgPath:
      'https://media.istockphoto.com/photos/young-man-reading-book-in-the-library-picture-id939065140?k=20&m=939065140&s=612x612&w=0&h=_LjNQoGFV23S4qLdPPej-IwsduMlQ2w95Yuj5okg9ek=',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1550, flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 520,
                  width:1520,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;