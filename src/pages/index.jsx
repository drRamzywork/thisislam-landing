import Head from "next/head";
import Home from "@/components/Home";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";


export default function App({ siteInfo, allWords, dir, allLangs, allVideos, bookLinkData }) {
  const { locale } = useRouter();
  const imagePath = `/assets/imgs/logo.png`;
  const SiteDescription = siteInfo?.description;
  const mainBook = bookLinkData?.languages?.find((lang) => lang.code === locale)
  const mainBookURL = mainBook?.link

  return (
    <>
      <Head>
        <title>{siteInfo?.site_name}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`${imagePath}`} />
        <meta name="theme-color" content="#092e47" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={siteInfo?.site_name} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={siteInfo?.site_name} />
        <link
          rel="apple-touch-icon"
          href={`https://portal.thisislam.net${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`https://portal.thisislam.net${imagePath}`}
        />
        <meta name="author" content={siteInfo?.site_name} />
        <meta name="description" content={SiteDescription} />
        <link
          rel="canonical"
          href={`https://portal.thisislam.net${locale}`}
        />
        <meta name="msapplication-TileColor" content="#092e47" />
        <meta
          name="msapplication-TileImage"
          content={`https://portal.thisislam.net${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteInfo?.site_name} />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale} />
        <meta
          property="og:url"
          content={`https://portal.thisislam.net${locale}`}
        />
        <meta property="og:title" content={siteInfo?.site_name} />
        <meta property="og:description" content={SiteDescription} />
        <meta
          property="og:image"
          content={`  ${imagePath}`}
        />
        <meta itemProp="name" content={siteInfo?.site_name} />
        <meta itemProp="author" content={siteInfo?.site_name} />
        <meta
          itemProp="image"
          content={`https://portal.thisislam.net${imagePath}`}
        />
        <meta itemProp="description" content={SiteDescription} />
        <meta
          name="twitter:image"
          content={`https://portal.thisislam.net${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={siteInfo?.site_name} />
        <meta
          name="twitter:image:src"
          content={`https://portal.thisislam.net${imagePath}`}
        />
        <meta name="twitter:description" content={SiteDescription} />
      </Head>



      <Home allWords={allWords} allVideos={allVideos} dir={dir} allLangs={allLangs} mainBookURL={mainBookURL} />

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const baseURL = "https://app.thisislam.net/api";
  try {
    const allLangsRes = await fetch(`${baseURL}/all_langs`);
    if (!allLangsRes.ok) throw new Error("Failed to fetch all_langs");
    const allLangs = await allLangsRes.json();

    const allVideosRes = await fetch(`${baseURL}/get-videos/${locale}`);
    if (!allVideosRes.ok) throw new Error("Failed to fetch all_langs");
    const allVideos = await allVideosRes.json();

    const siteInfoRes = await fetch(`${baseURL}/get_site_info/${locale}`);
    if (!siteInfoRes.ok) throw new Error("Failed to fetch get_site_info");
    const siteInfo = await siteInfoRes.json();

    const allWordsRes = await fetch(`${baseURL}/get-trans/${locale}`);
    if (!allWordsRes.ok) throw new Error("Failed to fetch get_site_info");
    const allWords = await allWordsRes.json();

    const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
    if (!dirResponse.ok) throw new Error("Failed to fetch get_direction");
    const dir = await dirResponse.json();

    const bookLinkResponse = await fetch(`https://compaines.thisislam.net/api/company/kim-vakfi`);
    if (!bookLinkResponse.ok) throw new Error("Failed to fetch get_direction");
    const bookLinkData = await bookLinkResponse.json();


    return {
      props: {
        allLangs,
        siteInfo: siteInfo?.data,
        allWords,
        dir,
        allVideos,
        bookLinkData: bookLinkData?.data


      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("API call error:", error.message);
    return {
      props: {
        allLangs: null,
        siteInfo: null,
        allWords: null,
        dir: null,
        allVideos: null,
        bookLinkData: null
      },
      revalidate: 10,
    };
  }
}
