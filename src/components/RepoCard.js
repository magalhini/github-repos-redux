import React from 'react';

const RepoCard = (props) => {
  const updatedAt = new Date(props.updated_at);

  const styles = {
    fontSize: '13px',
    fontFamily: 'Georgia'
  };

  return (
    <div className="card">
      <div className="card-header">
        <a target="_blank" href={props.svn_url}>{props.name}</a>
        <span style={styles} className="float-right">Updated at: {updatedAt.toDateString()}</span>
      </div>
      <div className="card-block">
        <p className="card__description" htmlFor="">{props.description}</p>
        <span className="badge badge-primary badge__stargazers">Stars: {props.stargazers_count}</span>
        <span className="badge badge-primary badge__watchers">Watchers: {props.watchers}</span>
      </div>
    </div>
  );
}

export default RepoCard;
