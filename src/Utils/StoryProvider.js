import Mountains from "../images/stories/desktop/mountains.jpg";
import Cityscapes from "../images/stories/desktop/cityscapes.jpg";
import Vovage from "../images/stories/desktop/18-days-voyage.jpg";
import Architecturals from "../images/stories/desktop/architecturals.jpg";
import Tour from "../images/stories/desktop/world-tour.jpg";
import Corners from "../images/stories/desktop/unforeseen-corners.jpg";
import King from "../images/stories/desktop/king-on-africa.jpg";
import Nowhere from "../images/stories/desktop/trip-to-nowhere.jpg";
import Seas from "../images/stories/desktop/rage-of-the-sea.jpg";
import Running from "../images/stories/desktop/running-free.jpg";
import Waves from "../images/stories/desktop/behind-the-waves.jpg";
import Calm from "../images/stories/desktop/calm-waters.jpg";
import MilkyWay from "../images/stories/desktop/milky-way.jpg";
import DarkForest from "../images/stories/desktop/dark-forest.jpg";
import Beauty from "../images/stories/desktop/somwarpet.jpg";
import Dreams from "../images/stories/desktop/land-of-dreams.jpg";

const stories = [
  {
    img: Mountains,
    date: "April 16th 2020",
    title: "The Mountains",
    author: "John Appleseed",
  },
  {
    img: Cityscapes,
    date: "April 14th 2020",
    title: "Sunset Cityscapess",
    author: "Benjamin Cruz",
  },
  {
    img: Vovage,
    date: "April 11th 2020",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
  },
  {
    img: Architecturals,
    date: "April 9th 2020",
    title: "Architecturals",
    author: "Samantha Brooke",
  },
  {
    img: Tour,
    date: "April 7th 2020",
    title: "World Tour 2019",
    author: "Timothy Wagner",
  },
  {
    img: Corners,
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "William Malcolm",
  },
  {
    img: King,
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
  },
  {
    img: Nowhere,
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
  },
  {
    img: Seas,
    date: "March 19th 2020",
    title: "Rage of The Sea",
    author: "Mohammed Abdul",
  },
  {
    img: Running,
    date: "March 16th 2020",
    title: "Running Free",
    author: "Michelle",
  },
  {
    img: Waves,
    date: "March 11th 2020",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
  },
  {
    img: Calm,
    date: "March 9th 2020",
    title: "Calm Waters",
    author: "Samantha Brooke",
  },
  {
    img: MilkyWay,
    date: "March 5th 2020",
    title: "Milky Way",
    author: "Benjamin Cruz",
  },
  {
    img: DarkForest,
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
  },
  {
    img: Beauty,
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    author: "Michelle",
  },
  {
    img: Dreams,
    date: "February 25th 2020",
    title: "Land of Dreams",
    author: "William Malcolm",
  },
];

const getStories = (isHome = false) => {
  if (isHome) {
    return stories.slice(0, 4);
  }

  return stories;
};

export default getStories;
