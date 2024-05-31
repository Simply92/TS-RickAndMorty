import { useAppStore } from '../stores/useAppStore'
import Card from './Card'

const Cards = () => {
    const { characters } = useAppStore()
    return (
        <div>
            {characters.map((character) =>
                <div key={character.id}>
                    <Card
                        key={character.id}
                        character={character}
                    />
                </div>
            )}

        </div>
    )
}

export default Cards
