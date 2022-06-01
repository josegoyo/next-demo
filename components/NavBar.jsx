import React from "react";

import styles from "./NavBar.module.css";
import ActiveLink from "./ActiveLink";

const menuItems = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About",
        href: "/about",
    },
    {
        text: "Contact",
        href: "/contact",
    },
    {
        text: "Pricing",
        href: "/pricing",
    },
];

export default function NavBar() {
    return (
        <nav className={styles["menu-container"]}>
            {menuItems.map(({ text, href }) => (
                <ActiveLink title={text} href={href} key={text} />
            ))}
        </nav>
    );
}
