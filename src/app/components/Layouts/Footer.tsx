const Footer = () => {
  const quickLinks = ['About Us', 'Shop', 'FAQs', 'Contact Us'];
  const socialMedia = ['Facebook', 'Twitter', 'Instagram'];

  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="container max-w-[1232px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">About WeShop</h3>
          <p className="text-sm">
            WeShop is your go-to destination for the best deals on the latest
            products. Shop with confidence and enjoy fast delivery worldwide.
          </p>
        </div>

        <div className="text-text-secondary">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white cursor-pointer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-text-secondary">
          <h3 className="text-lg font-semibold mb-4 text-white">
            Get in Touch
          </h3>
          <p className="text-sm">
            Email:{' '}
            <a href="mailto:support@weshop.com" className="hover:text-white">
              support@weshop.com
            </a>
          </p>
          <p className="text-sm mt-2">
            Phone:{' '}
            <a href="tel:+1234567890" className="hover:text-white">
              +1 234 567 890
            </a>
          </p>
          <p className="text-sm mt-4">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            {socialMedia.map((platform, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white cursor-pointer"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-text-secondary text-sm border-t border-border-subdued pt-4">
        <p>&copy; {new Date().getFullYear()} WeShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
