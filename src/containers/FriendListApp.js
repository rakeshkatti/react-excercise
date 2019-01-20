import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {
	render() {
		const {
			pagination: { page, pageSize },
			friendlist: { friendsById }
		} = this.props;
		const pageStart = (page - 1) * pageSize;
		const pageEnd = pageStart + parseInt(pageSize, 10);
		const friends = friendsById.slice(pageStart, pageEnd);

		const actions = {
			addFriend: this.props.addFriend,
			deleteFriend: this.props.deleteFriend,
			starFriend: this.props.starFriend
		};

		return (
			<div className={styles.friendListApp}>
				<h1>The FriendList</h1>
				<AddFriendInput addFriend={actions.addFriend} />
				<FriendList friends={friends} actions={actions} />
				<Pagination />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(
	mapStateToProps,
	{
		addFriend,
		deleteFriend,
		starFriend
	}
)(FriendListApp);
