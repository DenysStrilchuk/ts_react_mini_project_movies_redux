import {useAppDispatch, useAppSelector} from "../../../hooks";
import {RootState} from "../../../types";
import {toggleTheme} from "../../../store";
import ReactSwitch from "react-switch";



const ThemeSwitcher = () => {
    const theme = useAppSelector((state:RootState) => state.theme.mode);
    const dispatch = useAppDispatch();

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    };


    return (
        <div>
            <label>
                <ReactSwitch
                    checked={theme === 'dark'}
                    onChange={toggleThemeHandler}
                    onColor="#1e272e"
                    offColor="#dcdde1"
                    checkedIcon={false}
                    uncheckedIcon={false}
                />
            </label>
        </div>
    );
};

export {ThemeSwitcher};