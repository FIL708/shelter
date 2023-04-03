import { ReactComponent as Arrow } from './icon__glyphs/arrow.svg';
import { ReactComponent as Cat } from './icon__glyphs/cat.svg';
import { ReactComponent as Dog } from './icon__glyphs/dog.svg';
import { ReactComponent as Email } from './icon__glyphs/email.svg';
import { ReactComponent as Facebook } from './icon__glyphs/facebook.svg';
import { ReactComponent as FullArrow } from './icon__glyphs/full-arrow.svg';
import { ReactComponent as FullHeart } from './icon__glyphs/full-heart.svg';
import { ReactComponent as Grid } from './icon__glyphs/grid.svg';
import { ReactComponent as Heart } from './icon__glyphs/heart.svg';
import { ReactComponent as Instagram } from './icon__glyphs/instagram.svg';
import { ReactComponent as Invisible } from './icon__glyphs/invisible.svg';
import { ReactComponent as Visible } from './icon__glyphs/visible.svg';
import { ReactComponent as Linkedin } from './icon__glyphs/linkedin.svg';
import { ReactComponent as List } from './icon__glyphs/list.svg';
import { ReactComponent as Location } from './icon__glyphs/location.svg';
import { ReactComponent as Login } from './icon__glyphs/login.svg';
import { ReactComponent as Option } from './icon__glyphs/option.svg';
import { ReactComponent as Phone } from './icon__glyphs/phone.svg';
import { ReactComponent as Register } from './icon__glyphs/register.svg';
import { ReactComponent as RoundFacebook } from './icon__glyphs/round-fb.svg';
import { ReactComponent as RoundGoogle } from './icon__glyphs/round-google.svg';
import { ReactComponent as RoundTwitter } from './icon__glyphs/round-twitter.svg';
import { ReactComponent as Send } from './icon__glyphs/send.svg';
import { ReactComponent as SmallLogo } from './icon__glyphs/small-logo.svg';
import { ReactComponent as Twitter } from './icon__glyphs/twitter.svg';
import { ReactComponent as Youtube } from './icon__glyphs/yt.svg';

const chooseIcon = (type) => {
  switch (type) {
    case 'arrow':
      return Arrow;
    case 'cat':
      return Cat;
    case 'dog':
      return Dog;
    case 'email':
      return Email;
    case 'facebook':
      return Facebook;
    case 'full-arrow':
      return FullArrow;
    case 'full-heart':
      return FullHeart;
    case 'grid':
      return Grid;
    case 'heart':
      return Heart;
    case 'instagram':
      return Instagram;
    case 'invisible':
      return Invisible;
    case 'visible':
      return Visible;
    case 'linkedin':
      return Linkedin;
    case 'list':
      return List;
    case 'location':
      return Location;
    case 'login':
      return Login;
    case 'option':
      return Option;
    case 'phone':
      return Phone;
    case 'register':
      return Register;
    case 'round-facebook':
      return RoundFacebook;
    case 'round-google':
      return RoundGoogle;
    case 'round-twitter':
      return RoundTwitter;
    case 'send':
      return Send;
    case 'small-logo':
      return SmallLogo;
    case 'twitter':
      return Twitter;
    case 'youtube':
      return Youtube;
    default:
      return undefined;
  }
};

export default chooseIcon;