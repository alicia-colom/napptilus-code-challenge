import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        Made with&nbsp;
        <i className="fa fa-heart footer__copyright--icon" aria-hidden="true" />
        &nbsp;by&nbsp;
        <a
          className="footer__copyright--author"
          href="https://www.linkedin.com/in/aliciacolomortega/"
          target="_blank"
          rel="noreferrer"
          title="Link to Alicia Colom LinkedIn"
        >
          &nbsp;Alicia Colom
        </a>
      </p>
    </footer>
  );
};

export default Footer;
