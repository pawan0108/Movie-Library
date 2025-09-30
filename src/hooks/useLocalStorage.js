import { useState } from 'react';


export default function useLocalStorage(key, initialValue) {
const [state, setState] = useState(() => {
try {
const raw = localStorage.getItem(key);
return raw ? JSON.parse(raw) : initialValue;
} catch (e) {
return initialValue;
}
});


const setLocal = (val) => {
try {
const value = typeof val === 'function' ? val(state) : val;
setState(value);
localStorage.setItem(key, JSON.stringify(value));
} catch (e) { console.error(e); }
};


return [state, setLocal];
}