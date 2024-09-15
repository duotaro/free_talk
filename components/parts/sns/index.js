


import GithubIcon from '../../icons/github'
import InstagramIcon from '../../icons/instagram';
import GoogleIcon from '../../icons/google';
import FbIcon from '../../icons/fb';
import XIcon from '../../icons/x';

export default function SocialMedia({ isFooter }) {

    const iconClass = isFooter ? "text-white text-center p-2" : "text-black text-center p-2"
    const iconBorder =  isFooter ? "" : "border-1 rounded-full"
    return (
      <>
        <li>
            <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className={iconClass}>
                <FbIcon className={iconBorder}/>
            </a>
        </li>
        {/* <li>
            <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className={iconClass}>
                <GoogleIcon />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className={iconClass}>
                <InstagramIcon />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className={iconClass}>
                <GithubIcon />
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/tucsonnihongohosyuko/" target="_blank" className={iconClass}>
                <XIcon />
            </a>
        </li> */}
      </>
    );
  }
  
  
  