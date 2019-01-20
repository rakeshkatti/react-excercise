import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import GenderNames from '../constants/GenderNames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {
	render() {
		const genders = Object.keys(GenderNames);
		return (
			<div>
				<input
					type="text"
					autoFocus="true"
					className={classnames(
						'form-control',
						styles.addFriendInput
					)}
					placeholder="Type the name of a friend"
					value={this.state.name}
					onChange={this.handleNameChange.bind(this)}
				/>
				<div className={styles.genderInputForm}>
					{genders.map(gender => (
						<span key={`gender_${gender}`}>
							<input
								type="radio"
								id={`gender_${gender}`}
								checked={this.state.gender === gender}
								onChange={this.handleGenderChange.bind(this)}
								value={gender}
							/>
							<label
								className={styles.label}
								htmlFor={`gender_${gender}`}>
								{GenderNames[gender]}{' '}
							</label>
						</span>
					))}

					<button
						className={`btn btn-default ${styles.addButton}`}
						onClick={this.handleSubmit.bind(this)}>
						<i className="fa fa-plus" /> Add
					</button>
				</div>
			</div>
		);
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			name: this.props.name || ''
		};
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleGenderChange(e) {
		this.setState({ gender: e.target.value });
	}

	handleSubmit(e) {
		this.props.addFriend(this.state.name.trim(), this.state.gender);
		this.setState({ name: '', gender: '' });
	}
}

AddFriendInput.propTypes = {
	addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;
