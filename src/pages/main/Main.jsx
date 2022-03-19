import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import Center from './Center/Center';
import Footer from './Footer/Footer';
import cls from './Main.module.scss'
const Home = () => {
  return (
    <>
      <div className={cls.mainImg}>
        <div className={cls.mainBackground}>
          <MainHeader />
          <Center />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
