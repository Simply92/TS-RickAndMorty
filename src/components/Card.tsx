
import { Link } from "react-router-dom"
import { FavChar } from "../types"
import { useAppStore } from "../stores/useAppStore"
import { useEffect, useState } from "react"

type CardProps = {
  character: FavChar
}

const Card = ({ character }: CardProps) => {
  const { status, image, name, species, gender, id } = character
  const { onClose, addFav, removeFav, favorite } = useAppStore()
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(character)
    setIsFav(!isFav)
  }

  useEffect(() => {
    favorite.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorite]);

  return (
    <div className={`w-80 border-[10px] rounded-2xl flex flex-col relative ${status === "Alive" ? "bg-[#3fe216] border-[#3fe216]" :
      status === "Dead" ? "bg-[#ff0800] border-[#ff0800]" : "bg-[#FFD700] border-[#FFD700] "}`}>
      <div className="">
        {isFav ? (
          <button className="" onClick={handleFavorite}>❤️</button>
        ) : (
          <button className="" onClick={handleFavorite}>🤍</button>
        )}
      </div>
      <img className="rounded-lg" src={image} alt="" />
      <button
        className="absolute top-[-10px] right-[-10px] rounded-full w-8 h-8 bg-black border-none font-extrabold cursor-pointer text-red-500"
        onClick={() => onClose(id)}
      >X
      </button>

      <div className="flex w-80 h-40 flex-col items-center text-lg font-bold uppercase mt-2 gap-8">
        <Link to={`/detail/${id}`}>
          <h2 className={`absolute top-[290px] left-0 bg-[rgba(0,0,0,0.9)] w-full text-center rounded-md ${status === "Alive" ? "text-[#3fe216]" :
            status === "Dead" ? "text-[#ff0800]" : "text-[#FFD700]"} `}>
            {name.split(' ').length > 2 ? name.split(' ').slice(0, 2).join(' ') + "..." : name}
          </h2>
        </Link>
        <h2 className={`absolute top-[-3%] bg-[rgba(0,0,0,0.7)] w-32 text-center rounded-md ${status === "Alive" ? "text-[#3fe216]" :
          status === "Dead" ? "text-[#ff0800]" : "text-[#FFD700]"} `}>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  )
}

export default Card
