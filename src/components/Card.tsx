
import { Link } from "react-router-dom"
import { Character } from "../types"

type CardProps = {
  character: Character
}

const Card = ({ character }: CardProps) => {
  const { status, image, name, species, gender, id } = character
  return (
    <div className={status === "Alive" ? "" :
      status === "Dead" ? "" : ""}>
      {/* <div className="">
      {isFav ? (
        <button className="" onClick={handleFavorite}>❤️</button>
      ) : (
        <button className="" onClick={handleFavorite}>🤍</button>
      )}
      </div> */}
      <img className="" src={image} alt="" />
      <button className="">X</button>

      <div className="">
        <Link to={`/detail/${id}`}>
          <h2 className="">
            {name.split(' ').length > "2" ? name.split(' ').slice(0, 2).join(' ') + "..." : name}
          </h2>
        </Link>
        <h2 className="">{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  )
}

export default Card
