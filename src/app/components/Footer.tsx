import phone from "@/assets/icons/phone.svg";
import facebook from "@/assets/icons/facebook.svg";
import youtube from "@/assets/icons/youtube.svg";
import linkedIn from "@/assets/icons/linkedIn.svg";
import instagram from "@/assets/icons/instagram.svg";
import Image from "next/image";
import styles from "@/app/styles/home.module.scss";

const Footer = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-start">
        {/* About the Company */}
        <div>
          <p className="text-lg font-bold text-gray-900">About the company</p>
          <p className="text-sm text-gray-500 mt-2">
            Learn To Love Growth <br />
            And Change And You Will <br />
            Be A Success. Microsoft Patch
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <Image
              loading="lazy"
              src={facebook}
              alt="facebook"
              className={styles.phoneIcon}
            />
            <Image
              loading="lazy"
              src={youtube}
              alt="youtube"
              className={styles.phoneIcon}
            />
            <Image
              loading="lazy"
              src={linkedIn}
              alt="linkedIn"
              className={styles.phoneIcon}
            />
            <Image
              loading="lazy"
              src={instagram}
              alt="instagram"
              className={styles.phoneIcon}
            />
          </div>
        </div>

        {/* Products */}
        <div>
          <p className="text-lg font-bold text-gray-900">Products</p>
          <ul className="text-gray-500 mt-2 space-y-1 p-0">
            <li>CSR Activities</li>
            <li>Green Banking</li>
            <li>News</li>
            <li>Ongoing Campaign</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <p className="text-lg font-bold text-gray-900">Get Started</p>
          <ul className="text-gray-500 mt-2 space-y-1 p-0">
            <li>Career</li>
            <li>Contact Us</li>
            <li>Government Securities</li>
            <li>Examples</li>
            <li>NIS</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <p className="text-lg font-bold text-gray-900">About</p>
          <ul className="text-gray-500 mt-2 space-y-1 p-0">
            <li>IPDC at a Glance</li>
            <li>Mission, Vision & Values</li>
            <li>Corporate Governance</li>
            <li>Shareholders</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center md:justify-start mt-6">
          <div className="flex gap-2 text-gray-900 font-bold">
            <Image
              loading="lazy"
              src={phone}
              alt="phone"
              className={styles.phoneIcon}
            />
            <span>16519</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
