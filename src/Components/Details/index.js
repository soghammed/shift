import React from 'react'
import { Container, Badge, Tooltip, Checkbox, Slider } from '@material-ui/core'
import style from './style.scss'
import PropTypes from 'prop-types'
import {LocalShipping, AssignmentInd, Tv } from '@material-ui/icons';

const mark = [
	{
		value:40,
		label:'2pm'
	},
	{
		value: 80,
		label: '10pm'
	}
];

export default class Details extends React.Component {

	render() {
		return (
			<div>
				<div className="details-box">
					<div className="detail-item">
						<div>Inventory</div>
						<div><div className="c-badge">2x items</div></div>
						<div><div className="c-badge">edit</div></div>
					</div>
					<div className="detail-item">
						<div>Pickup</div>
						<div><div className="c-badge">The Old Shippen, Ivybridge</div></div>
						<div><div className="c-badge">edit</div></div>
					</div>
					<div className="detail-item">
						<div>Drop-off</div>
						<div><div className="c-badge">Broadmoor Farm, Beworth</div></div>
						<div><div className="c-badge">edit</div></div>
					</div>
					<div className="detail-item">
						<div>Do you require two people?</div>
						<div></div>
						<div><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /></div>
					</div>
				</div>
				<div className="benefits">
					<div className="tile">
						<div>
							<i className="icon"><LocalShipping fontSize='large'/></i>
							<div className="text">A vetted & rated Shifter</div>
						</div>
					</div>
					<div className="tile">
						<div>
							<i className="icon"><AssignmentInd fontSize='large'/></i>
							<div className="text">Big enough to fit everything in</div>
						</div>
					</div>
					<div className="tile">
						<div>
							<i className="icon"><Tv fontSize='large'/></i>
							<div className="text">Fixed price, no matter what!</div>
						</div>
					</div>
				</div>
				<div className="pickup-text">Your pickup will be between <span className="highlight">2pm </span>and <span className="highlight">10pm</span></div>
				<div className="pickup-time">
					<Slider
						defaultValue={[40, 80]}
						color='secondary'
						aria-labelledby='range-slider'
						marks={mark}/>
			    </div>
			</div>	
		)
	}
}