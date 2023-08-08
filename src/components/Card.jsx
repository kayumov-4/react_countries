const Card = ({ flag, name, population, region, capital }) => {
  return (
    <>
      <div key={population} className="w-[264px] h-[400px] mb-[67px] shw">
        <img
          src={flag}
          alt="germany"
          className="w-full h-[160px] object-cover"
        />

        <div className="p-6">
          <h1 className="text-lg font-extrabold mb-4">{name}</h1>

          <ul>
            <li className="leading-4 mb-4">
              <p>
                <strong>Population:</strong>
              </p>
            </li>
            <li className="leading-4 mb-4">
              <p>
                <strong>Region:</strong> {region}
              </p>
            </li>
            <li className="leading-4 mb-4">
              <p>
                <strong> Capital:</strong> {capital}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
