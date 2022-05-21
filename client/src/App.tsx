import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { NavBarComponent } from './components/nav-bar/nav-bar';
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

const App = () => {

  const { user } = useContext(Context);
  console.log(user)
  const isAuth = true;
  return (
    <>
      <NavBarComponent/>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Shop} element={ <Shop/> }/>
          <Route path={AppRoute.Login} element={ <Auth/> }/>
          <Route path={AppRoute.Registration} element={ <Auth/> }/>
          <Route path={AppRoute.Device} element={ <DevicePage/> }/>

          { isAuth && <Route path={AppRoute.Admin} element={ <Admin/> }/> }
          { isAuth && <Route path={AppRoute.Basket} element={ <Basket/> }/>}

          <Route path={'*'} element={ <Shop/> }/>

        </Routes>
      </BrowserRouter>
    </>

  );

  
}

export default App;
