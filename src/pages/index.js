import Head from 'next/head';
import Header from "../components/Header";
import Footer from '../components/Footer';
import {getPostList} from "../utils/posts";
import {getProductList} from "../utils/products"
import PostList from '../components/PostList';
import ProductList from '../components/ProductList';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>UP Boutique</title>
      </Head>
      <div className='page-wrapper'>
      <Header/>
        <main>
         <ProductList products = {props.productList}/>
        <PostList posts={props.postList}/>
        
        </main>
        <Footer/>
      </div>
    </>
  );
};

export const getStaticProps = async ()=>{
  const postList = getPostList();
  const productList = await getProductList()
  return {
    props:{
      postList,
      productList
    }
  }
}

export default Home;