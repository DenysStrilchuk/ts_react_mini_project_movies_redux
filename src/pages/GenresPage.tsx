import {Outlet} from "react-router-dom";

import {Genres} from "../components";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};