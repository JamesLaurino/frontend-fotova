import React, {FunctionComponent} from 'react';
import ProductList from "./page/product-list";
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";
import ProductDetail from "./page/product-detail";
import NavbarComponent from "./share/navabar-component";
import pageNoteFound from "./page/page-not-found";
import productEdit from "./page/product-edit";
import postDetail from "./page/post-detail";
import postList from "./page/post-list";
import Login from "./page/Login";
import PrivateRoute from "./component/PrivateRoute";
import AddressList from "./page/address-list";



const App: FunctionComponent = () => {

  return (
    <Router>
        <NavbarComponent/>
      <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route exact path="/products/edit" component={productEdit} />
          <Route exact path="/addresses" component={AddressList} />
          <PrivateRoute exact path="/post/:id" component={postDetail} />
          <PrivateRoute exact path="/posts" component={postList} />
          <Route component={pageNoteFound}/>
      </Switch>
    </Router>
  );
}
export default App;
