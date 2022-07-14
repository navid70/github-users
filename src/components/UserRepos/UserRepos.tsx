import './UserRepos.scss';
import React from "react";

type repository = {
  html_url: string,
  name: string,
  description: string,
  language: string,
  stargazers_count: number,
  forks_count: number,
}

const UserRepos: React.FC<{ data: repository[] }> = ({data}) => {
  return (
    <div className={'user-repos'}>
      <div className="user-repos__title">
        Repositories ({data.length})
      </div>

      <div className="user-repos__list">
        {data.length > 0 ?
          data.map((repo,index) => (
            <div key={index} className={'user-repos__detail'}>
              <div className="user-repos__detail__name">
                <a href={repo.html_url}>{repo.name}</a>
              </div>
              <div className="user-repos__detail__desc">
                {repo.description}
              </div>
              <div className="user-repos__detail__stats">
                <div>language : {repo.language}</div>
                <div>stars : {repo.stargazers_count}</div>
                <div>forks : {repo.forks_count}</div>
              </div>


            </div>
          )) :
          (<div>This User Hasn't any repositories!</div>)
        }
      </div>
    </div>
  );
};

export default UserRepos;