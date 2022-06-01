import { useRouter } from "next/router";

import React from "react";
import Link from "next/link";

const style = {
    color: "#0070f3",
    textDecoration: "underline",
};

export default function ActiveLink({ title, href, active }) {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : null}>{title}</a>
        </Link>
    );
}
