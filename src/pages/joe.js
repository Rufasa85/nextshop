import Head from 'next/head';
import Header from "../components/Header";
import Footer from '../components/Footer';

const Joe = () => {
  return (
    <>
      <Head>
        <title>UP Boutique</title>
      </Head>
      <div className='page-wrapper'>
      <Header/>
        <main>
          <h2>Joe joe joe joe joe joe joe</h2>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Joe;