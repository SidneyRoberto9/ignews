import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "./styles.module.scss";
import * as Prismic from "@prismicio/client";
import { createClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021 </time>
            <strong>Creating a Monorepo with Lerna & yarn Workspaces</strong>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="">
            <time>12 de março de 2021 </time>
            <strong>Creating a Monorepo with Lerna & yarn Workspaces</strong>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="">
            <time>12 de março de 2021 </time>
            <strong>Creating a Monorepo with Lerna & yarn Workspaces</strong>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
          <a href="">
            <time>12 de março de 2021 </time>
            <strong>Creating a Monorepo with Lerna & yarn Workspaces</strong>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let prismic = createClient();

  const response = await prismic.query(
    [Prismic.predicate.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  //   const publication = response.results.map((publi) => {
  //     return {
  //       slug: publi.uid,
  //       title: RichText.asText(publi.data.title),
  //       excerpt:
  //       publi.data.content.find((content) => content.type === "paragraph")
  //           ?.text ?? "",
  //       updatedAt: new Date(publi.last_publication_date).toLocaleDateString(
  //         "pt-BR",
  //         {
  //           day: "2-digit",
  //           month: "long",
  //           year: "numeric",
  //         }
  //       ),
  //     };
  //   });

  return {
    props: {
      // publication,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
