import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from './Rules';

class ScoreTable extends Component {
	getTotalScore() {
		const { scores } = this.props;
		let totalScore = 0;
		for (let key in scores) {
			if (scores[key]) totalScore += scores[key];
		}
		return totalScore;
	}

	render() {
		const { scores, doScore } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								doScore={(evt) =>
									doScore('ones', ones.evalRoll)}
								desc={ones.desc}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={(evt) =>
									doScore('twos', twos.evalRoll)}
								desc={twos.desc}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={(evt) =>
									doScore('threes', threes.evalRoll)}
								desc={threes.desc}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={(evt) =>
									doScore('fours', fours.evalRoll)}
								desc={fours.desc}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={(evt) =>
									doScore('fives', fives.evalRoll)}
								desc={fives.desc}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={(evt) =>
									doScore('sixes', sixes.evalRoll)}
								desc={sixes.desc}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								doScore={(evt) =>
									doScore(
										'threeOfKind',
										threeOfKind.evalRoll
									)}
								desc={threeOfKind.desc}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={(evt) =>
									doScore('fourOfKind', fourOfKind.evalRoll)}
								desc={fourOfKind.desc}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={(evt) =>
									doScore('fullHouse', fullHouse.evalRoll)}
								desc={fullHouse.desc}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={(evt) =>
									doScore(
										'smallStraight',
										smallStraight.evalRoll
									)}
								desc={smallStraight.desc}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={(evt) =>
									doScore(
										'largeStraight',
										largeStraight.evalRoll
									)}
								desc={largeStraight.desc}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={(evt) =>
									doScore('yahtzee', yahtzee.evalRoll)}
								desc={yahtzee.desc}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={(evt) =>
									doScore('chance', chance.evalRoll)}
								desc={chance.desc}
							/>
						</tbody>
					</table>
				</section>
				<h2>TOTAL SCORE: {this.getTotalScore()}</h2>
			</div>
		);
	}
}

export default ScoreTable;
