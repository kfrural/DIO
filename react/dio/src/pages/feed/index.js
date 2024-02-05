import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import './feed.css';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <div className="Container">
            <div className="Column"flex={3}>
                <div className="Title">Feed</div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Column" flex={1}>
              <div className="TitleHighlight"> # RANKING 5 TOP DA SEMANA </div>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={25}/>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={65}/>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={45}/>
                <UserInfo nome="Pablo Henrique" image="https://avatars.githubusercontent.com/u/45184516?v=" percentual={72}/>
            </div>
        </div>
    </>
  )
}

export { Feed }; 