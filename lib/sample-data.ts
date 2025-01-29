import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from "react-icons/fa";

import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeLine,
  RiDiscordLine,
} from "react-icons/ri";

import ModelWhiteImg from "@/public/images/model-white.png";
import ModelBlackImg from "@/public/images/model-black.png";
import MenuImg1 from "@/public/images/menu/1.png";
import MenuImg2 from "@/public/images/menu/2.png";
import MenuImg3 from "@/public/images/menu/3.png";
import MenuImg4 from "@/public/images/menu/4.png";
import SignatureImg from "@/public/images/team/signature.png";
import ChefImg from "@/public/images/team/chef.png";
import Avatar1 from "@/public/images/testimonial/avatar1.png";
import Avatar2 from "@/public/images/testimonial/avatar2.png";
import Avatar3 from "@/public/images/testimonial/avatar3.png";

export const navLinks = [
  { href: "/", label: "home" },
  { href: "/", label: "about" },
  { href: "/", label: "menu" },
  { href: "/", label: "team" },
  { href: "/", label: "testimonials" },
  { href: "/", label: "book a table" },
  { href: "/", label: "contact" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/", icon: RiFacebookFill },
  { label: "Instagram", href: "https://instagram.com/", icon: RiInstagramLine },
  { label: "Twitter X", href: "https://x.com/", icon: RiTwitterXFill },
  { label: "Youtube", href: "https://youtube.com/", icon: RiYoutubeLine },
  { label: "Discord", href: "https://discord.com/", icon: RiDiscordLine },
];

export const menuData = {
  title: "delicious flavour of autumn",
  subtitle: "view all menu for tasty meal today",
  modelImg: ModelWhiteImg,
  btnText: "view complete menu",
  menuItems: [
    {
      image: MenuImg1,
      name: "Chocolate Cake",
      price: "$7.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg2,
      name: "Veggie Burger",
      price: "$9.49",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg3,
      name: "King Burger",
      price: "$8.50",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
    {
      image: MenuImg4,
      name: "Mexican Burger",
      price: "$9.99",
      description: "Class aptent taciti ciosqu litora torquent per",
    },
  ],
};

export const teamData = {
  pretitle: "our team",
  title: "meet our chef",
  sub1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.",
  sub2: "Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.",
  name: "sara peter",
  occupation: "executive chef",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: "1500+ statisfied clients",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.",
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "booking form",
  subtitle:
    "Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.",
  modelImg: ModelBlackImg,
  btnText: "make a reservation",
};

export const newsletterData = {
  title: "join our newsletter",
  subtitle: "Get latest news & updates in your inbox.",
  placeholder: "Subscribe our delicious dishes",
  btnText: "subscribe now",
};

export const footerData = {
  contact: {
    title: "contact location",
    address: "3784 patterson road, #8 new york, CA 69000",
    phone: "(201)256-3689",
  },
  hours: {
    title: "working hours",
    program: [
      {
        days: "monday - friday",
        hours: "09:00 AM - 10:00 PM",
      },
      {
        days: "saturday - sunday",
        hours: "09:00 AM - 11:00 PM",
      },
    ],
  },
  social: {
    title: "social network",
    icons: [
      { href: "/", icon: FaYoutube },
      { href: "/", icon: FaFacebookF },
      { href: "/", icon: FaInstagram },
      { href: "/", icon: FaPinterestP },
      { href: "/", icon: FaDiscord },
    ],
  },
};
