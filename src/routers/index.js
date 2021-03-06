import Search from "antd/lib/input/Search";
import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import Main from "../pages/layout/Main";
import MainAdmin from "../pages/layout/MainAdmin";
import CategoryAdmin from "../pages/view/Admin/Category/index.jsx";
import Dashboard from "../pages/view/Admin/Dasboard";
import Food from "../pages/view/Admin/Food";
import Invoice from "../pages/view/Admin/Invoice";
import invoiceActive from "../pages/view/Admin/Invoice/invoiceActive";
import Login from "../pages/view/Admin/Login";
import Checkout from "../pages/view/Main/Checkout";
import FoodDetail from "../pages/view/Main/FoodDetail";
import Home from "../pages/view/Main/Home";
import Product from "../pages/view/Main/Product";
import Category from "../pages/view/Main/ProductCategory";
import ProductSearch from "../pages/view/Main/ProductSearch";
import Profile from "../pages/view/Main/Profile";
import ProfileInvoice from "../pages/view/Main/Profile/ProfileInvoice";
import SearchComponent from "../pages/view/Main/Search/index";
import OAuth2RedirectHandler from "../pages/view/Main/User/OAuth2/OAuth2RedirectHandler";
import PrivateRouterAdmin from "./PrivateAdminRouter";
import PrivateRoute from "./PrivateRouter";
import MenuAdmin from  '../pages/view/Admin/Menu/index'

import React from 'react'
ra
const index = () => {
  return (
    <div>
      
    </div>
  )
}

export default index

const Routers = () => {
  // if(isLogin){
  //     setCheck(true)
  // }
  // else(setCheck(false))

  return (
    <HashRouter>
      <Switch>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/admin/:path?/:path?" exact>
          <MainAdmin>
            <Switch>
              <PrivateRouterAdmin path="/admin/" component={Dashboard} exact>
             
              </PrivateRouterAdmin>
              <PrivateRouterAdmin path="/admin/food"component={Food} exact>
              </PrivateRouterAdmin>

              <PrivateRouterAdmin path="/admin/category" component={CategoryAdmin}>
              </PrivateRouterAdmin>
              <PrivateRouterAdmin path="/admin/menu" component={MenuAdmin} exact>
             
              </PrivateRouterAdmin>
              <PrivateRouterAdmin path="/admin/invoice" component={Invoice}>
              </PrivateRouterAdmin>
            </Switch>
          </MainAdmin>
        </Route>
        <Route>
          <Main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/product">
                <Product />
              </Route>
              <Route path="/food/:id">
                <FoodDetail />
              </Route>
              <PrivateRoute path="/profile" component={Profile} exact></PrivateRoute>
              <PrivateRoute
                path="/checkout"
                component={Checkout}
              ></PrivateRoute>
              <PrivateRoute
                path="/profile/order"
                component={ProfileInvoice}
              ></PrivateRoute>

              <Route path="/category/:id">
                <Category />
              </Route>
              <Route path="/search/" exact>
                <SearchComponent />
              </Route>
              <Route path="/search/:key">
                <ProductSearch />
              </Route>
              <Route
                path="/oauth2/redirect"
                component={OAuth2RedirectHandler}
              ></Route>
            </Switch>
          </Main>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Routers;
