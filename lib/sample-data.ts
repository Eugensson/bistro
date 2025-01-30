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

import MenuImg1 from "@/public/images/menu/1.png";
import MenuImg2 from "@/public/images/menu/2.png";
import MenuImg3 from "@/public/images/menu/3.png";
import MenuImg4 from "@/public/images/menu/4.png";
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

export const menuItems = [
  {
    image: MenuImg1,
    title: "Chocolate Cake",
    price: "$7.99",
    description:
      "A tender chocolate sponge soaked in cocoa cream, topped with glaze and grated dark chocolate.",
  },
  {
    image: MenuImg2,
    title: "Veggie Burger",
    price: "$9.49",
    description:
      "A juicy veggie patty with spinach and chickpeas, served in a soft bun with avocado sauce.",
  },
  {
    image: MenuImg3,
    title: "King Burger",
    price: "$8.50",
    description:
      "A fluffy bun with a juicy beef patty, cheddar cheese, caramelized onions, and signature sauce.",
  },
  {
    image: MenuImg4,
    title: "Mexican Burger",
    price: "$9.99",
    description:
      "A spicy burger with hot jalapeños, salsa sauce, a juicy patty, and mozzarella cheese.",
  },
];

export const testimonialList = [
  {
    message:
      "This café always has a pleasant atmosphere and delicious dishes! The coffee here is simply incredible, and the desserts are always fresh. The service is top-notch, I highly recommend it to everyone!",
    image: Avatar1,
    name: "Rick Thompson",
    occupation: "Photographer",
  },
  {
    message:
      "Every time I visit, I can't help but enjoy the wonderful dishes. I'll definitely come back, as it's always delicious and cozy here. I also love the interior design!",
    image: Avatar2,
    name: "Adam Fernandez",
    occupation: "CEO of Delightful",
  },
  {
    message:
      "I've visited this café multiple times, and each time I am impressed by the service quality. It's a great place to spend time with friends or for solo work. Highly recommend it!",
    image: Avatar3,
    name: "Frank Jackson",
    occupation: "Creative Designer",
  },
];

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
