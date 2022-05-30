import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { check } from './http/user-api';
import { Admin } from './pages/admin/admin';
import { Auth } from './pages/auth/auth';
import { Basket } from './pages/basket/basket';
import { DevicePage } from './pages/device-page/device-page';
import { Shop } from './pages/shop/shop';

export const AppRoute = {
  Shop: '/',
  Device: '/device/:id',
  Basket: '/basket',
  Admin: '/admin',
  Login: '/login',
  Registration: 'registration'
}

const App = observer (() => {

  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))

  }, []);

  if (loading) {
    return <Spinner animation='grow'/>
  }


  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>

        <Routes>
          <Route path={AppRoute.Shop} element={ <Shop/> }/>
          <Route path={AppRoute.Login} element={ <Auth/> }/>
          <Route path={AppRoute.Registration} element={ <Auth/> }/>
          <Route path={AppRoute.Device} element={ <DevicePage/> }/>

          { user.isAuth && <Route path={AppRoute.Admin} element={ <Admin/> }/> }
          { user.isAuth && <Route path={AppRoute.Basket} element={ <Basket/> }/>}

          <Route path={'*'} element={ <Shop/> }/>


        </Routes>
      </BrowserRouter>
    </>

  );

  
})

export default App;
