import Head from 'next/head';
import Header from "../components/Header";
import Footer from '../components/Footer';
import {getPostList} from "../utils/posts"

const Home = (props) => {
  return (
    <>
      <Head>
        <title>UP Boutique</title>
      </Head>
      <div className='page-wrapper'>
      <Header/>
        <main>
        

        </main>
        <Footer/>
      </div>
    </>
  );
};

export const getStaticProps = ()=>{
  const postList = getPostList();
  return {
    props:{
      postList
    }
  }
}

export default Home;