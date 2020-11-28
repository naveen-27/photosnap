import CreateDesktop from "../images/home/desktop/create-and-share.jpg";
import StoriesDesktop from "../images/home/desktop/beautiful-stories.jpg";
import EveryoneDesktop from "../images/home/desktop/designed-for-everyone.jpg";

import CreateTablet from "../images/home/tablet/create-and-share.jpg";
import StoriesTablet from "../images/home/tablet/beautiful-stories.jpg";
import EveryoneTablet from "../images/home/tablet/designed-for-everyone.jpg";

import CreateMobile from "../images/home/mobile/create-and-share.jpg";
import StoriesMobile from "../images/home/mobile/beautiful-stories.jpg";
import EveryoneMobile from "../images/home/mobile/designed-for-everyone.jpg";

const Desktop = [CreateDesktop, StoriesDesktop, EveryoneDesktop];
const Tablet = [CreateTablet, StoriesTablet, EveryoneTablet];
const Mobile = [CreateMobile, StoriesMobile, EveryoneMobile];

const chooseImageHome = () => {
  const width = window.innerWidth;

  if (width >= 1100) {
    return Desktop;
  } else if (width <= 750) {
    return Mobile;
  } else {
    return Tablet;
  }
};

export default chooseImageHome;
