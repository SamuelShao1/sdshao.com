/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'background-pan': 'background-pan 2s linear infinite',
				'fade-in': 'fade-in 2s',
				'pingPong': 'pingPong 3s infinite',
				'pingPongOut': 'pingPongOut 2s infinite',
        		'pingPongIn': 'pingPongIn 2s infinite',
			},
			colors: {
				'brand-100': '#f0f4f9',
				'brand-200': '#e6eaf1',
				'brand-300': '#585858',
				'brand-400': '#dfe4ea',
				'brand-blue' : '#4285f4',
				'gradient-blue': 'linear-gradient(90deg, #4285f4 0%, #34a853 33%, #fbbc05 66%, #ea4335 100%)',
				'brand-yell': '#f4f333',
				'brand-yellow1': '#e3ff73',
				'brand-yellow2': '#dcff50',
				'brand-100': '#f0f4f9',
				'brand-200': '#e6eaf1',
        		'brand-250': '#d8dae2',
				'brand-300': '#585858',
				'brand-400': '#dfe4ea',
				'brand-blue' : '#4285f4',
				'gradient-blue': 'linear-gradient(90deg, #4285f4 0%, #34a853 33%, #fbbc05 66%, #ea4335 100%)',
				'brand-purple_accent1': '#c690f5',
				'brand-purple_main1': '#c690f5',
				'brand-dark_purple1' : '#1f0733',
				'brand-dark_purple2' : '#0f0517',
				'brand-dark1' : '#1D1D1D',
				'brand-dark2' : '#0f0f0f',
			},
			keyframes: {
				'background-pan': {
					'0%': {
						'background-position': '-800px 0px',
					},
					'100%': {
						'background-position': '800px 0px',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '100%',
					},
				},
				'pingPong': {
					'0%, 100%': { opacity: 0, transform: 'translateY(-20px)' },
					'50%': { opacity: 1, transform: 'translateY(0)' },
				},
				'pingPongOut': {
					'0%, 40%': { opacity: 1, transform: 'translateY(0)' },
					'50%, 100%': { opacity: 0, transform: 'translateY(-20px)' },
				},
				'pingPongIn': {
					'0%, 40%': { opacity: 0, transform: 'translateY(-20px)' },
					'50%, 100%': { opacity: 1, transform: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
};
