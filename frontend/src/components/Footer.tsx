import "../assets/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <strong><a href="/">Pet Shop</a> </strong>
                <div className="social-links">
                    <div className="title">Contact</div>
                    <a className="social-link" href="#" target="_blank">Instagram</a>
                    <a className="social-link" href="#" target="_blank">Facebook</a>
                    <a className="social-link" href="#" target="_blank">Pinterest</a>
                    <a className="social-link" href="#" target="_blank">YouTube</a>
                </div>
                <div className="resource-links">
                    <div className="title">Resources</div>
                    <a className="resource-link" href="#" target="_blank">Return Policy</a>
                    <a className="resource-link" href="#" target="_blank">Track Your Order</a>
                    <a className="resource-link" href="#" target="_blank">FAQs</a>
                    <a className="resource-link" href="#" target="_blank">Privacy Policy</a>
                </div>
                <div className="about-links">
                    <div className="title">Contact</div>
                    <a className="about-link" href="#" target="_blank">Our Mission</a>
                    <a className="about-link" href="#" target="_blank">Join Our Community</a>
                    <a className="about-link" href="#" target="_blank">Press Release</a>
                </div>
            </div>
            <div className="copyright-text">
                &copy; 2024
                <a href="https://github.com/Nayantha">014 - Nayantha Koralegama</a>,
                <a href="https://github.com/NimeshaKavindi">021 - Nimesha Kavindi</a>,
                <a href="https://github.com/PiyumalT">035 - Tharindu Piyumal</a>,
                <a href="https://github.com/desilva-se19047">047 - Achini Prasadini</a>
            </div>
        </footer>
    );
};

export default Footer;