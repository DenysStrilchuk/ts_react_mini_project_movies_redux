import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const MovieByGenre: FC<IProps> = () => {
    return (
        <div>
            MovieByGenre
        </div>
    );
};

export {MovieByGenre};