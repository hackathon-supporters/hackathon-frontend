import {atom} from "recoil";
import {Profile} from "../model/Profile";

export const loginStatusAtom = atom<Profile|null>({
    key: 'components.loginstatus',
    default: null
})
