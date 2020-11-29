import { ReactComponent as BoostExposure } from "../images/features/desktop/boost-exposure.svg";
import { ReactComponent as CustomDomain } from "../images/features/desktop/custom-domain.svg";
import { ReactComponent as DragDrop } from "../images/features/desktop/drag-drop.svg";
import { ReactComponent as Embed } from "../images/features/desktop/embed.svg";
import { ReactComponent as NoLimit } from "../images/features/desktop/no-limit.svg";
import { ReactComponent as Responsive } from "../images/features/desktop/responsive.svg";

const featuresContent = [
  {
    title: "100% Responsive",
    detail:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    img: Responsive,
  },
  {
    title: "No Photo Upload Limit",
    detail:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    img: NoLimit,
  },
  {
    title: "Available to Embed",
    detail:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    img: Embed,
  },
  {
    title: "Custom Domain",
    detail:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    img: CustomDomain,
  },
  {
    title: "Boost Your Exposure",
    detail:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    img: BoostExposure,
  },
  {
    title: "Drag & Drop Image",
    detail:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    img: DragDrop,
  },
];

const getFeatures = (half = false) => {
  if (half) return featuresContent.slice(0, 3);
  return featuresContent;
};

export default getFeatures;
