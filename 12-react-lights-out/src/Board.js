import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
	static defaultProps = {
		nrows: 5,
		ncols: 5,
		chanceLightStartsOn: 0.3
	};

	constructor(props) {
		super(props);

		// TODO: set initial state
		this.state = {
			board: this.createBoard(),
			hasWon: false
		};
	}

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */

	createBoard() {
		let board = [ ...Array(this.props.nrows) ].map((e) =>
			Array(this.props.ncols)
		);
		// TODO: create array-of-arrays of true/false values
		for (let i = 0; i < this.props.nrows; i++) {
			for (let j = 0; j < this.props.ncols; j++) {
				console.log(board[i][j], i, j);
				board[i][j] = Math.random() < 0.3 ? true : false;
			}
		}
		return board;
	}

	/** handle changing a cell: update board & determine if winner */

	flipCellsAround(coord) {
		let { ncols, nrows } = this.props;
		let board = this.state.board;
		let [ y, x ] = coord.split('-').map(Number);

		function flipCell(y, x) {
			// if this coord is actually on board, flip it

			if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
				board[y][x] = !board[y][x];
			}
		}

		// TODO: flip this cell and the cells around it

		// win when every cell is turned off
		// TODO: determine is the game has been won
		let hasWon = false;
		if (board[y][x] === false) {
			hasWon = true;
		}
		this.setState({ board, hasWon });
	}

	/** Render game board or winning message. */

	render() {
		let gameBoard = this.state.board.map((row) => (
			<tr>{row.map((cell) => <Cell isLit={cell} />)}</tr>
		));
		return (
			<div>
				Board // if the game is won, just show a winning msg & render
				nothing else // TODO // make table board // TODO
				<table className="Board">
					<tbody>{gameBoard}</tbody>
				</table>
			</div>
		);
	}
}

export default Board;
