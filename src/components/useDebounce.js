import { useRef } from "react";

export default function useDebounce (fn,delay) {
    const timeoutRef = useRef(null);

    function debounceFn(...param) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            fn(...param);
        }, delay);
    }
    return debounceFn;
}