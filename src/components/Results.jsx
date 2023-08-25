import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pet Founded</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            key={pet.id}
            id={pet.id}
            breed={pet.breed}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
