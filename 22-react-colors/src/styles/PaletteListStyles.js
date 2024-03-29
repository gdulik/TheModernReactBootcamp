import sizes from './sizes';
import bg from './bg.svg';

const styles = {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0.01,
			transition: 'opacity 500ms ease-out'
		}
	},
	root: {
		// backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		/* background by SVGBackgrounds.com */
		backgroundColor: '#394bad',
		backgroundImage: `url(${bg})`,
		overflowY: 'scroll'
	},
	heading: {
		fontSize: '2rem'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '80%'
		},
		[sizes.down('xs')]: {
			width: '75%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: '#fff',
		alignItems: 'center',
		'& a': {
			color: '#fff',
			textDecoration: 'none',
			transition: 'all 0.2s ease-in',
			borderBottom: '2px solid transparent',
			'&:hover': {
				borderBottom: '2px solid #fff'
			}
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2,50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1,100%)',
			gridGap: '1.4rem'
		}
	}
};

export default styles;
