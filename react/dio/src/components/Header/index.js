import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import './header.css';

const Header = ({autenticado}) => {
  return (
    <div className="Wrapper">
      <div className="Container">
          <div className="Row">
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <div className="BuscarInputContainer">
                <div className="Input" placeholder='Buscar...'/>
               </div>
                <div className="Menu">Live Code</div>
                <div className="Menu">Global</div>
              </>
            ) : null}
          </div>
          <div className="Row">
              {autenticado ? (
                <div className="UserPicture" src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <div className="MenuRight" href="/">Home</div>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
          </div>
      </div>
    </div>
  )
}

export { Header }