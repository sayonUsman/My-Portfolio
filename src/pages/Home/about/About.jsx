import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-easing="ease-in-out"
    >
      <p className="text-justify mt-3 px-7 sm:px-9">
        Around 2019, I was introduced to programming for the first time. From
        then till now. First I started with C programming and then move to C++.
        C++ requires a lot of coding so I got interested in Python. Along with
        this, HTML CSS was too. Then I started learning Python 3 from YouTube
        and I learned Python very quickly. At the same time, the problem solving
        was also going on in URI Online Judge. Then I started learning the
        Django framework. Suddenly at the end of 2022 I had a bit of trouble and
        since then there was build a big gap between me and programming. Then
        what else!!! From January 2023, a new journey begins again with another
        new programming language. Now I can develop beautiful, responsive and
        dynamic websites with JavaScript, React, Node.js, Express.js, MongoDB
        and so on.
      </p>
    </div>
  );
};

export default About;
