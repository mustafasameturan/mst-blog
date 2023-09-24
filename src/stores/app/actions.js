import store from "..";
import {_setLanguage, _setTheme} from ".";

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setLanguage = (language) => store.dispatch(_setLanguage(language))