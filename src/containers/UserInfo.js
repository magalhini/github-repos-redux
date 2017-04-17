import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RepoCard from '../components/RepoCard';
import * as actions from '../actions/index';

const styles = {
  sortBy: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '20px',
    marginBottom: '20px',
    cursor: 'pointer'
  },
  error: {
    marginTop: '2em'
  }
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRepos(repos) {
    return repos.map(repo => <RepoCard key={repo.id} {...repo} />)
  }

  render() {
    const { repos } = this.props;

    if (repos.error) {
      return (<h3 style={styles.error}>Ops, the user you've searched for doesn't exist</h3>);
    }

    if (repos.repos.length) {
      return (
        <div className="repos__list">
          <div className="form-group">
          </div>
          <h3>{repos.repos.length} repositories for {this.props.repos.username}</h3>
          <p style={styles.sortBy} onClick={this.props.sortByStars}>Sort by stars</p>
          {this.renderRepos(repos.repos)}
        </div>
      );
    } else if (!repos.repos.length && this.props.repos.username) {
      return <h3>This user has no own repos yet</h3>
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}

const mapDispatchToProps = dispatch => ({
  searchUser: username => dispatch(actions.searchUser(username)),
  sortByStars: () => dispatch(actions.sortByStars()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
