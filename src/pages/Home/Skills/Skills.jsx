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
    <div className="flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 md:mt-5 md:px-16">
      {logos.slice(0, 8).map((logo) => (
        <LogoCard
          key={logos.indexOf(logo)}
          logo={logo}
          title={"Expertised"}
        ></LogoCard>
      ))}

      {logos.slice(8, 16).map((logo) => (
        <LogoCard
          key={logos.indexOf(logo)}
          logo={logo}
          title={"Comfortable"}
        ></LogoCard>
      ))}

      {logos.slice(16).map((logo) => (
        <LogoCard
          key={logos.indexOf(logo)}
          logo={logo}
          title={"Familiar"}
        ></LogoCard>
      ))}
    </div>
  );
};

export default Skills;
