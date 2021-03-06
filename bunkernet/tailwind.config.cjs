module.exports = {
	purge: [],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
			mono: ['"Fira Code"'],
			sans: ['"Lato"'],
			serif: ['"Source"']
		},

		extend: {
			backgroundImage: {
				'copy-img': "url('/copy.png')"
			}
		},
		textColor: {
			light: '#000000',
			DEFAULT: '#000000',
			dark: '#ffffff',
			cyan: '#26E1FA',
			unselected: '#787878',
			green: '#0CF682',
			red: '#cc2222'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			unselected: '#787878',
			background: {
				light: '#ffffff',
				DEFAULT: '#ffffff',
				dark: '#1A1A1A'
			},
			cyan: {
				light: '#26E1FA',
				DEFAULT: '#26E1FA',
				dark: '#20D2DD'
			},
			green: {
				light: '#0CF682',
				DEFAULT: '#0CF682',
				dark: '#0CF682'
			},
			gray: {
				light: '#FAFAFA',
				DEFAULT: '#222222',
				dark: '#222222'
			},
			graycode: {
				light: '#DADADA',
				DEFAULT: '#222222',
				dark: '#222222'
			}
		}
	},
	variants: {
		extend: {
			margin: ['odd, even'],
			padding: ['odd, even'],
			flexDirection: ['odd', 'even'],
			scale: ['active', 'group-hover'],
			hidden: ['dark']
		}
	},
	plugins: []
};
