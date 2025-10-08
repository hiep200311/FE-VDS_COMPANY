
import { useEffect, type RefObject } from 'react';

type UseOutsideClickProps = {
    ref: RefObject<HTMLElement | null>;
    handler: (event: MouseEvent | TouchEvent) => void;
    enabled?: boolean;
};

/**
 * A hook that triggers a callback when a click occurs outside of the referenced element
 */
export function useOutsideClick({
    ref,
    handler,
    enabled = true
}: UseOutsideClickProps) {
    useEffect(() => {
        if (!enabled) return;

        const listener = (event: MouseEvent | TouchEvent) => {
            // Do nothing if the ref doesn't exist or if clicking on the ref itself
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, enabled]);
}