import React from "react";
import './UserInfo.scss';

const UserInfo: React.FC<{ data: any }> = ({data}) => {

  return (
    <div className={'user-info'}>
      <div className="user-info__image">
        <img src={data.avatar_url} alt=""/>
        <div className="user-info__image__name">{data.name}</div>
        <div className="user-info__image__login">{data.login}</div>
      </div>
      <div className="user-info__data">
        <div className={'user-info__data__general'}>
          <p>bio : <span>{data.bio}</span></p>
          <p>email : {data.email ? <span>{data.bio}</span> : <i>private</i>}</p>
          <p>blog : <a target={'_blank'} href={data.blog} rel="noreferrer">{data.blog}</a></p>

        </div>

        <div className="user-info__data__follow-stats">
          <div className="">following : <span>{data.following}</span></div>
          <div className="">followers : <span>{data.followers}</span></div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;