import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome To ClickAndGet</h1>
        <HomeScreen />
      </main>

      <Footer />
    </>
  );
};

export default App;
