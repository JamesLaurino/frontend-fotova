import React, {FunctionComponent} from 'react';
import ProductList from "./page/product-list";
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";
import ProductDetail from "./page/product-detail";
import NavbarComponent from "./share/navabar-component";
import pageNoteFound from "./page/page-note-found";
import productEdit from "./page/product-edit";


const App: FunctionComponent = () => {

  return (
    <Router>
        <NavbarComponent/>
      <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route exact path="/products/edit" component={productEdit} />
          <Route component={pageNoteFound}/>
      </Switch>
    </Router>
  );
}
export default App;
