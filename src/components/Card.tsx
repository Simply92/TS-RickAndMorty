
import { Link } from "react-router-dom"
import { Character } from "../types"
import { useAppStore } from "../stores/useAppStore"

type CardProps = {
  character: Character
}

const Card = ({ character }: CardProps) => {
  const { status, image, name, species, gender, id } = character
  const { onClose } = useAppStore()
  return (
    <div className={`w-80 border-[10px] rounded-md flex flex-col relative ${status === "Alive" ? "bg-[#3fe216] border-[#3fe216]" :
      status === "Dead" ? "bg-[#ff0800] border-[#ff0800]" : "bg-[#FFD700] border-[#FFD700] "}`}>
      {/* <div className="">
      {isFav ? (
        <button className="" onClick={handleFavorite}>❤️</button>
      ) : (
        <button className="" onClick={handleFavorite}>🤍</button>
      )}
      </div> */}
      <img className="rounded-lg" src={image} alt="" />
      <button className="" onClick={() => onClose(id)}>X</button>

      <div className="flex w-80 mt-2 h-40 flex-col items-center">
        <Link to={`/detail/${id}`}>
          <h2 className={`absolute top-[290px] left-0 bg-[rgba(0,0,0,0.9)] w-full text-center text-lg rounded-md ${status === "Alive" ? "text-[#3fe216]" :
            status === "Dead" ? "text-[#ff0800]" : "text-[#FFD700]"} `}>
            {name.split(' ').length > 2 ? name.split(' ').slice(0, 2).join(' ') + "..." : name}
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
