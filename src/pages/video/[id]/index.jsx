import { useRouter } from 'next/router';
import Head from 'next/head';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import VideosComponent from '@/components/VideosComponent';

const Video = ({ siteInfo, dir, allLangs, allWords, getVideoData }) => {

  const SiteDescription = siteInfo?.data?.description;
  const SiteKeyWords = siteInfo?.data?.keywords;
  const SiteName = siteInfo?.data?.site_name;



  const { locale } = useRouter();

  console.log(getVideoData?.video, "getVideoData?.title")

  return (
    <>
      {/* <Head>
        <title>{`${SiteName} - ${getVideoData?.title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SiteDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SiteKeyWords} />
        <meta property="og:title" content={SiteName} />
        <meta property="og:description" content={SiteDescription} />
        <meta property="og:url" content={"https://thisislam.net/"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:domain" content="https://thisislam.net/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SiteName} />
        <meta name="twitter:description" content={SiteDescription} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="google-site-verification" content="ZMcQQyaUJV6fuXkMty467caCYlHFOkDuUh9qeXZNpYw" />
        <meta property="og:image" content="https://thisislam.net/assets/imgs/logo.png" />
        <meta name="twitter:image" content="https://thisislam.net/assets/imgs/logo.png" />
      </Head> */}


      <Head>
        <title>{`${SiteName} - ${getVideoData?.title}`}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={SiteDescription} />

        {/* Primary Open Graph tags */}
        <meta property="og:type" content="video.other" />
        <meta property="og:site_name" content={SiteName} />
        <meta property="og:locale" content={locale} />
        <meta property="og:url" content={`https://thisislam.net/ar/video/${getVideoData?.video}`} />
        <meta property="og:title" content={`${SiteName} - ${getVideoData?.title}`} />
        <meta property="og:description" content={SiteDescription} />

        {/* Video Thumbnail - ensure no other conflicting images */}
        <meta
          property="og:image"
          content={`https://img.youtube.com/vi/${getVideoData?.video}/maxresdefault.jpg`}
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        {/* Twitter Card setup */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content={`${SiteName} - ${getVideoData?.title}`} />
        <meta name="twitter:description" content={SiteDescription} />
        <meta
          name="twitter:image"
          content={`https://img.youtube.com/vi/${getVideoData?.video}/maxresdefault.jpg`}
        />

        {/* Optional Video Embed link */}
        <meta property="og:video" content={`https://www.youtube.com/embed/${getVideoData?.video}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Head>


      <Navbar allWords={allWords} dir={dir?.data?.dir} allLangs={allLangs} height={'video'} />

      <VideosComponent getVideoData={getVideoData} />



      <Footer />
    </>
  );
};

export default Video;





export async function getStaticProps({ locale, params }) {
  const baseURL = "https://app.thisislam.net/api";

  const { id } = params;

  const allWordsRes = await fetch(`${baseURL}/get-trans/${locale}`);
  const allWords = await allWordsRes.json();




  // Fetch video data
  const getVideoRes = await fetch(`https://app.thisislam.net/api/get-videos/${locale}?single=${id}`);
  const getVideoData = await getVideoRes.json();


  // Fetch other site data
  const languageValuesRes = await fetch(`https://app.thisislam.net/api/get_home/${locale}`);
  const languageValues = await languageValuesRes.json();

  const siteInfoRes = await fetch(`https://app.thisislam.net/api/get_site_info/${locale}`);
  const siteInfo = await siteInfoRes.json();

  const allTopicsRes = await fetch(`${baseURL}/all_menu_items/${locale}`);
  const allTopics = await allTopicsRes.json();

  const allLangsRes = await fetch(`${baseURL}/all_langs`);
  const allLangs = await allLangsRes.json();


  const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
  const dir = await dirResponse.json();

  return {
    props: {
      languageValues,
      getVideoData,
      siteInfo,
      allTopics,
      allLangs,
      allWords,
      dir
    },
    revalidate: 10,
  };
}


export async function getStaticPaths() {
  const slugsRes = await fetch(`https://app.thisislam.net/api/get-videos/en`);

  // if (!slugsRes.ok) {
  //   throw new Error(`Failed to fetch slugs, received status: ${slugsRes.status}`);
  // }

  const slugs = await slugsRes.json();

  const paths = slugs.map(slug => ({
    params: { id: slug.id }
  }));


  return {
    paths,
    // fallback: true
    fallback: "blocking"
  };

}
// export async function getStaticPaths() {
//   try {
//     const slugsRes = await fetch(`https://app.thisislam.net/api/get-videos/en`);

//     if (!slugsRes.ok) {
//       throw new Error(`Failed to fetch slugs, received status: ${slugsRes.status}`);
//     }

//     const slugs = await slugsRes.json();

//     const paths = slugs.map(slug => ({
//       params: { id: slug.id }
//     }));


//     return {
//       paths,
//       fallback: true
//     };

//   } catch (error) {
//     console.error("Error fetching slugs:", error);
//     return {
//       paths: [],
//       fallback: true
//     };
//   }
// }

