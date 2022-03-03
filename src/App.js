import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Calculator from './component/Calculator'
import Home from './component/Home';
import Count from './component/Count';
import LuasSegitiga from './component/LuasSegitiga';
import KelilingPersegiPanjang from './component/KelilingPersegiPanjang';
import LuasLingkaran from './component/LuasLingkaran';
import NilaiHuruf from './component/NilaiHuruf';
import TabelCustom from './component/TabelCustom';
import Ssessoon from './component/Ssessoon';
import JenisData from './component/JenisData';
import JenisData2 from './component/JenisData2';
import Chat from './component/Chat';
import ChatLayout from './component/ChatLayout';
import Crud from './component/crud/Crud';
import Crud2 from './component/crud2';
import Crud3 from './component/crud3';
import EditMasyarakat from './component/crud/EditMasyarakat';
import AddMasyarakat from './component/crud/AddMasyarakat';

export default function Index() {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <ProductList products={products} deleteProduct={deleteProduct} /> */}
            <Home/>
          </Route>
          <Route path="/masyarakat/edit/:id">
          <EditMasyarakat/>
          </Route>
          <Route path="/count">
          <Count/>
          </Route>
          <Route path="/calculator">
          <Calculator/>
          </Route>
          <Route path="/segitiga">
          <LuasSegitiga/>
          </Route>
          <Route path="/persegipanjang">
          <KelilingPersegiPanjang/>
          </Route>
          <Route path="/luaslingkaran">
          <LuasLingkaran/>
          </Route>
          <Route path="/nilaihuruf">
          <NilaiHuruf/>
          </Route>
          <Route path="/tabelcustom">
          <TabelCustom/>
          </Route>
          <Route path="/Ssessoon">
          <Ssessoon/>
          </Route>
          <Route path="/jenisdata">
          <JenisData/>
          </Route>
          <Route path="/jenisdata2">
          <JenisData2/>
          </Route>
          <Route path="/chat">
          <Chat/>
          </Route>
          <Route path="/chatlayout">
          <ChatLayout/>
          </Route>
          <Route path="/crud">
          <Crud/>
          </Route>
          
          <Route path="/addmasyarakat">
          <AddMasyarakat/>
          </Route>

          <Route path="/crud-2">
          <Crud2/>
          </Route>

          <Route path="/crud-3">
          <Crud3/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}