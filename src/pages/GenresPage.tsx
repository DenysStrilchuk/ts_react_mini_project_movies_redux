import {Genres} from "../components";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};