const SectionTitle = ({ id, title }) => {
  return (
    <div
      id={id}
      className="mt-10 md:mt-12 lg:mt-14 pl-7 sm:pl-9"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
