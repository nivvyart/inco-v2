import config from "../../lib/config";
import Head from "next/head";

// TODO:

type Props = {
  url: string;
  title?: string;
  description?: string;
};
export default function LinkedInMeta({ url, title, description }: Props) {
  return (
    <Head>
      <meta property="og:image" content="summary_large_image" />
      <meta property="og:url" content={config.linkedin} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={description ? description : config.site_description}
      />
    </Head>
  );
}
