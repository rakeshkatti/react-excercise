import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import genderNames from '../constants/GenderNames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
	render() {
		const { name, gender: genderValue } = this.props;
		const gender = genderNames[genderValue];
		return (
			<li className={styles.friendListItem}>
				<div className={styles.friendInfos}>
					<div>
						<span>{name}</span>
					</div>
					<div>
						<small>Sex: {gender}</small>
					</div>
					<div>
						<small>xx friends in common</small>
					</div>
				</div>
				<div className={styles.friendActions}>
					<button
						className={`btn btn-default ${styles.btnAction}`}
						onClick={() => this.props.starFriend(this.props.id)}>
						<i
							className={classnames('fa', {
								'fa-star': this.props.starred,
								'fa-star-o': !this.props.starred
							})}
						/>
					</button>
					<button
						className={`btn btn-default ${styles.btnAction}`}
						onClick={() => this.props.deleteFriend(this.props.id)}>
						<i className="fa fa-trash" />
					</button>
				</div>
			</li>
		);
	}
}

FriendListItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	gender: PropTypes.oneOf(['MALE', 'FEMALE']).isRequired,
	starred: PropTypes.bool,
	starFriend: PropTypes.func.isRequired
};

export default FriendListItem;
