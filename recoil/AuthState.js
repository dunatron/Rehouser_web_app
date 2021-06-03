import { atom } from 'recoil';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

let cookies = parseCookies();
const authState = atom({
  key: 'authState',
  default: {
    isAuthed: cookies.reAuthed === 'Yes' ? true : false,
    reAuthed: cookies.reAuthed === 'Yes',
  },
});

// const setLoginModalTabIdx = maybe we can do this from here?

export { authState };
