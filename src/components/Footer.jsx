import '../styles/Footer.scss';

const Footer = () => {
	return (
			<footer className='footer'>
				<p className='footer__copyright'>
					Made with <i className='fa fa-heart footer__copyright--icon' aria-hidden='true'></i> by{' '}
					<a className='footer__copyright--author' href='https://www.linkedin.com/in/aliciacolomortega/' target='_blank' rel='noreferrer' title='Link to Alicia Colom LinkedIn'>
						{' '}
						Alicia Colom
					</a>
				</p>
			</footer>
	);
};

export default Footer;
