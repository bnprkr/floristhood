import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Search from './components/Search/Search'
import Featured from './components/Featured/Featured'
import NewStyles from './components/NewStyles/NewStyles';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';
import BouquetBuilder from './components/BouquetBuilder/BouquetBuilder';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome />
          <Search />
          <Featured />
          <NewStyles />
          <Footer />
        </Route>
        <Route exact path="/order">
          <BouquetBuilder />
        </Route>
      </Switch>

    </>
  );
}

export default App;
