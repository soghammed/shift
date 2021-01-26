import React from 'react'
import moment from 'moment';
import style from './style.scss'
import {ArrowForwardIos} from '@material-ui/icons';
import { Container } from '@material-ui/core';
export default class Options extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			'dates': [
				{
					date: '02/05/2021',
					price: 67,
					cheapest:false					
				},
				{	
					date: '02/06/2021',
					price:78,
					cheapest:false
				},
				{
					date:'02/07/2021',
					price:93,
					cheapest:false
				},
				{
					date:'02/08/2021',
					price: 82,
					cheapest:false
				},
				{
					date: '02/09/2021',
					price:54,
					cheapest:true
				},
				{
					date: '02/10/2021',
					price:58,
					cheapest:false
				},
				{
					date: '02/11/2021',
					price:54,
					cheapest:true
				},
				{
					date: '02/12/2021',
					price:54,
					cheapest:true
				},
				{
					date:'02/13/2021',
					price:54,
					cheapest:true
				},
				{
					date: '02/11/2021',
					price:72,
					cheapest:false,
					text: 'Next Sunday'
				},
				{
					date: '02/12/2021',
					price:54,
					cheapest:true,
					text:'Next Monday'
				},
				{
					date: '02/13/2021',
					price:54,
					cheapest:true,
					text:'Next Tuesday'

				}
			]
		}
	}

	renderTiles(){
		return this.state.dates.map( (obj,i) => {
			let word = i === 1 ? "Tomorrow" : i === 0 ? "Today" : obj.text === 'undefined' ? false : obj.text;
			//bug fix
			if(!word){
				word = moment(obj.date).format('dddd');
			}
			return (
				<div key={i} className="option-tile">
					<div>{word}</div>
					<div>{moment(obj.date).format('Do MMMM')}</div>
					<div className="option-action">
						<div className="price">£<span className="reset-font">{obj.price}</span></div>
						{obj.cheapest ? (<div className="best-price">Best Price</div>) : ''}
						<div className="icon">
							<i className="arrow"><ArrowForwardIos fontSize='small' color="secondary"/></i>
						</div>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<Container>
				<div className="options-box">
				{this.renderTiles()}
				</div>
			</Container>
		)
	}
}