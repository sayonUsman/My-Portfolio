import bootstrap from "../../../assets/logo/bootstrap.svg";
import c from "../../../assets/logo/c.png";
import css from "../../../assets/logo/css.svg";
import django from "../../../assets/logo/django.svg";
import express from "../../../assets/logo/express-js.png";
import firebase from "../../../assets/logo/firebase.svg";
import flutter from "../../../assets/logo/flutter.svg";
import github from "../../../assets/logo/github.svg";
import html from "../../../assets/logo/html.png";
import javascript from "../../../assets/logo/javascript.svg";
import jwt from "../../../assets/logo/jwt.svg";
import mongodb from "../../../assets/logo/mongodb.svg";
import netlify from "../../../assets/logo/netlify.svg";
import next from "../../../assets/logo/next-js.svg";
import node from "../../../assets/logo/node-js.svg";
import python from "../../../assets/logo/python.svg";
import react from "../../../assets/logo/react.svg";
import api from "../../../assets/logo/rest-api.png";
import tailwind from "../../../assets/logo/tailwind-css.svg";
import vercel from "../../../assets/logo/vercel.svg";
import LogoCard from "./LogoCard/LogoCard";
import Marquee from "react-fast-marquee";

const logos = [
  react,
  api,
  mongodb,
  firebase,
  html,
  css,
  tailwind,
  express,
  javascript,
  python,
  c,
  jwt,
  github,
  bootstrap,
  vercel,
  netlify,
  node,
  next,
  django,
  flutter,
];

const Skills = () => {
  return (
    <div className="mt-3 md:mt-5 hover:md:mb-7 px-9 sm:px-12 lg:px-16">
      <Marquee pauseOnHover>
        {logos.map((logo) => (
          <LogoCard key={logos.indexOf(logo)} logo={logo}></LogoCard>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
