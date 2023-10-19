import logo from "../../assets/images/asset optimize x.png";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="border-t border-[#e6e6e6] relative pt-10">
      <div className="container mx-auto">
        <div className="section">
          <div className="footer-top flex">
            <div className="basis-[30%]">
              <img
                alt="asset optimizex logo"
                // data-testid="footer-logo"
                // loading="lazy"
                src={logo}
                width="200"
                height="62"
              />
            </div>
            <div className="basis-[70%] grid grid-cols-4">
              <ul className="leading-9">
                <li className="font-bold">Asset OptimizeX</li>
                <li>Get a Quote</li>
                <li>Product Features</li>
                <li>What&#x27;s New</li>
                <li>Workbench</li>
                <li className="mb-3">Support</li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Resources</li>
                <li>Resource Center</li>
                <li>Our Asset OptimizeX</li>
                <li>What is DAM</li>
                <li>Integrations</li>
                <li>ROI Calculator</li>
                <li>FAQ</li>
                <li>API</li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Community</li>
                <li>Brand Collective</li>
                <li>Events</li>
                <li>Partnerships</li>
                <li>Reviews</li>
              </ul>
              <ul className="leading-9">
                <li className="font-bold">Learn More</li>
                <li>About Us</li>
                <li>Legal</li>
                <li>Outfit Agreements</li>
                <li>Security</li>
                <li>Careers</li>
                <li>Get in Touch</li>
              </ul>
            </div>
          </div>
          <div className="py-10">
            <div className="text-center flex items-center justify-center">
              <div className="w-[40%] mt-10">
                <div className="flex">
                  <span className="border p-2 w-[50%] border-black-600 text-blue-800">
                    hello@assetoptimizex.com
                  </span>
                  <span className="border p-2 w-[50%] border-black-600 text-blue-800">
                    +880 1701-330261
                  </span>
                </div>
              </div>
            </div>
            <div className="flex text-sm justify-between">
              <p className="">
                Copyright ©2023 <span>Asset OptimizeX Digital Asset Management</span>
              </p>
              <ul className="flex gap-x-5 text-blue-800">
                <li>Cookie Preferences</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
