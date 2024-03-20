import {useAppDispatch, useAppSelector} from "../../../hooks";
import {RootState} from "../../../types";
import {toggleTheme} from "../../../store";
import ReactSwitch from "react-switch";
import {useEffect} from "react";



const ThemeSwitcher = () => {
    const theme = useAppSelector((state:RootState) => state.theme.mode);
    const dispatch = useAppDispatch();

    const toggleThemeHandler = () => {
        dispatch(toggleTheme());
    };

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
        document.body.classList.toggle('light', theme === 'light');
    }, [theme]);

    return (
        <div>
            <label>
                <ReactSwitch
                    checked={theme === 'dark'}
                    onChange={toggleThemeHandler}
                    onColor="#1e272e"
                    offColor="#dcdde1"
                    checkedIcon={<img width="27" height="27" src="https://img.icons8.com/ultraviolet/40/sun--v1.png"
                                      alt="sun--v1"/>
                    }
                    uncheckedIcon={<img width="28" height="28"
                                        src="https://img.icons8.com/plasticine/100/crescent-moon.png"
                                        alt="crescent-moon"/>
                    }
                />
            </label>
        </div>
    );
};

export {ThemeSwitcher};