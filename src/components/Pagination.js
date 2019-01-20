import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePage, changePageSize } from '../actions/PaginationActions';
import styles from './Pagination.css';

class Pagination extends Component {
	render() {
		const {
			friendlist: { friendsById },
			pagination: { page, pageSize },
			changePage,
			changePageSize
		} = this.props;
		const friendsListSize = friendsById.length;
		const previousPageDisabled = page === 1;
		const nextPageDisabled = pageSize * page >= friendsListSize;
		return (
			<div>
				{friendsListSize > 2 ? (
					<div className={styles.paginationSection}>
						<small>Page Size:</small>{' '}
						<select
							value={pageSize}
							onChange={e => changePageSize(e.target.value)}>
							{[2, 4, 6, 8, 10].map(i => (
								<option key={i} value={i}>
									{i}
								</option>
							))}
						</select>
						<button
							className={`btn btn-default ${
								styles.paginationButton
							}`}
							disabled={previousPageDisabled}
							onClick={() => {
								changePage(page - 1);
							}}>
							<i className="fa fa-angle-left" />
						</button>
						{page}
						<button
							className={`btn btn-default ${
								styles.paginationButton
							}`}
							disabled={nextPageDisabled}
							onClick={() => {
								changePage(page + 1, friendsListSize);
							}}>
							<i className="fa fa-angle-right" />
						</button>
					</div>
				) : null}
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
		changePage,
		changePageSize
	}
)(Pagination);
