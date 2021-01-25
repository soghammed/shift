import React from 'react'
import style from './style.scss'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	};
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="rec">
				<div className="header">{this.props.title}</div>
			</div>
		)
	}
}