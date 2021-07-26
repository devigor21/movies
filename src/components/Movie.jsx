function Movie(props) {
  const { Title: title, Year, imdbID: id, Type, Poster } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image">
        {
          Poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x445?text=${title}`} alt="Poster" /> : <img className="activator" src={Poster} alt="Poster" />
        }
        <div className="card-content">
          <h5 className="indigo-text">{title}</h5>
          <div>
            <p className="left">{Year}</p>
            <p className="right">{Type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
