import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchUser } from '../actions/index';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: 'magalhini' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.state.term.length) {
      this.props.searchUser(this.state.term);
      this.setState({ term: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input type="text"
          placeholder="Type Github's user name"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Search user</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchUser }, dispatch);
}

export { Search as PureSearch };
export default connect(null, mapDispatchToProps)(Search);
