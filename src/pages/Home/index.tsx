import React, {useContext, useEffect, useRef, useState} from "react";
import {findUser, getUserRepos} from "../../utils/services/API";
import UserInfo from "../../components/UserInfo/UserInfo";
import {HistoryContext} from "../../context/history-context";
import './home.scss';
import Loading from "../../components/Loading/Loading";
import UserRepos from "../../components/UserRepos/UserRepos";
import {useSearchParams} from "react-router-dom";

const Home = () => {
  const userName = useRef<HTMLInputElement>(null);
  const [userDetail, setUserDetail] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startingText, setStartingText] = useState('Enter UserName');
  const context = useContext(HistoryContext);
  const [searchParams] = useSearchParams();

  const getData = (name: string) => {
    setLoading(true);
    findUser(name).then(response => {
      if (response.message === "Not Found") {
        setStartingText('User Not found! try again...');
        return;
      }

      if (Object.keys(response).length > 0) {
        setUserDetail(response);
        context.addHistory(name);
      }
    })
      .catch(error => {
        console.log(error);
        setStartingText('User Not found! try again...');
      })
      .finally(() => {
      });

    getUserRepos(name).then(response => {
      if (response.length > 0) {
        setUserRepos(response);
      }
    })
      .catch(error => {
        console.log(error);
        setStartingText('User Not found! try again...');
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = userName.current!.value;
    getData(name)
  };

  useEffect(() => {
    if (searchParams.get('name')) {
      getData(searchParams.get('name') || '')
    }
  },[searchParams]);

  console.log(userDetail);
  return (
    <div className={'home'}>
      <form className={'form'} onSubmit={handleSubmit}>
        <input ref={userName} type="text" placeholder="Search User ..."
               className={'form__input'} id="searchInput"
               name="searchInput"/>
        <button type={'submit'} id="searchBtn" className={'form__submit'}/>
      </form>

      {loading ?
        <Loading/> :
        Object.keys(userDetail).length > 0 ?
          <>
            <UserInfo data={userDetail}/>
            <UserRepos data={userRepos}/>
          </> :
          <div className={'starting-text'}>{startingText}</div>
      }
    </div>
  );
};

export default Home;