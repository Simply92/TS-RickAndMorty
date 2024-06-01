import { useAppStore } from '../stores/useAppStore'
import Card from './Card'

const Cards = () => {
    const { characters } = useAppStore()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
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
