import { useEffect, useState } from 'react';
import { Button } from './Button'
import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SidebarProps {
  selectedGenreId: number,
  handleClickButton: (id: number) => void;
}

export function SideBar({ handleClickButton, selectedGenreId }: SidebarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get(`genres`).then(response => {
      setGenres(response.data);
    })
  }, [selectedGenreId]);

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