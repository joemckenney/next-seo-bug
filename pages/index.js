import styles from "../styles/Home.module.css";

import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Nice title!"
        description="Nice Description"
        canonical="https://www.something.com"
        openGraph={{
          url: "https://www.something.com",
          type: "website",
          title: "Nice Title!",
          description: "description",
          images: [
            {
              url: "https://www.something.com/static/og.png",
              width: 1200,
              height: 630,
              type: "image/png",
            },
          ],
          site_name: "Something",
        }}
        twitter={{
          handle: "@something",
          site: "@something",
          cardType: "summary_large_image",
        }}
      />
      <div className={styles.container}>
        <main className={styles.main}>hello world</main>
      </div>
    </>
  );
}
