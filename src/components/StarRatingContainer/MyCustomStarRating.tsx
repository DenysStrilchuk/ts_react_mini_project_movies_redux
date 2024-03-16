import React from 'react';
import {StarRating} from 'star-rating-react-ts';

interface IProps {
    rating: number;
}

const customTheme = {
    colors: {
        backgroundDefault: 'lightgray',
        backgroundColorActive: '#D8A127',
        backgroundColorHover: '#275ed8'
    },
    size: 40
};

const MyCustomStarRating: React.FC<IProps> = ({rating}) => {
    return (
        <StarRating
            numStars={5}
            initialRating={rating / 2}
            readOnly={true}
            theme={customTheme}
        />
    );
}

export {
    MyCustomStarRating
}
