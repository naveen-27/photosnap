import FeatureDesktop from "../images/features/desktop/hero.jpg";
import FeatureTablet from "../images/features/tablet/hero.jpg";
import FeatureMobile from "../images/features/mobile/hero.jpg";

import PricingDesktop from "../images/pricing/desktop/hero.jpg";
import PricingTablet from "../images/pricing/tablet/hero.jpg";
import PricingMobile from "../images/pricing/mobile/hero.jpg";

import StoryDesktop from "../images/stories/desktop/moon-of-appalacia.jpg";
import StoryTablet from "../images/stories/tablet/moon-of-appalacia.jpg";
import StoryMobile from "../images/stories/mobile/moon-of-appalacia.jpg";

import BannerDesktop from "../images/shared/desktop/bg-beta.jpg";
import BannerTablet from "../images/shared/tablet/bg-beta.jpg";
import BannerMobile from "../images/shared/mobile/bg-beta.jpg";

const heroImages = {
  features: {
    desktop: FeatureDesktop,
    tablet: FeatureTablet,
    mobile: FeatureMobile,
  },
  pricing: {
    desktop: PricingDesktop,
    tablet: PricingTablet,
    mobile: PricingMobile,
  },
  stories: {
    desktop: StoryDesktop,
    tablet: StoryTablet,
    mobile: StoryMobile,
  },
  banner: {
    desktop: BannerDesktop,
    tablet: BannerTablet,
    mobile: BannerMobile,
  },
};

const getHeroImage = (page, deviceWidth) => {
  if (deviceWidth >= 1100) {
    return heroImages[page].desktop;
  } else if (deviceWidth <= 750) {
    return heroImages[page].mobile;
  } else {
    return heroImages[page].tablet;
  }
};

export default getHeroImage;
