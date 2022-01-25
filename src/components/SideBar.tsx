import { useEffect, useState } from "react";
import { Button } from './Button'
import { api } from '../services/api';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props) {
  // Complete aqui

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response: any) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    //setSelectedGenreId(id);
    console.log('o q vem aqui dentro do sidebar: ', id)
    return id
  }

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}