import Head from "next/head";
import NavBar from "../NavBar";

import styles from "./Main.module.css";

export default function MainLayout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Demo</title>
                <meta name="description" content="demo home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>{children}</main>
        </div>
    );
}
