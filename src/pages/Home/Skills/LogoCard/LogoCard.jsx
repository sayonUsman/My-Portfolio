const LogoCard = ({ logo }) => {
  return (
    <div className="flex mx-auto">
      <div className="card card-compact w-24 h-24 bg-white shadow-md shadow-zinc-900 m-3 hover:shadow-none">
        <div className="flex justify-center items-center h-full">
          <figure className="flex mx-auto my-auto">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
