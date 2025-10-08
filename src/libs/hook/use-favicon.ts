import { useEffect } from "react";

const useFavicon = (href: string) => {
    useEffect(() => {
        let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");

        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }

        const prevHref = link.href;
        link.href = href;

        return () => {
            link.href = prevHref; // Optional: restore old favicon on unmount
        };
    }, [href]);
}

export default useFavicon;