import { useMap } from 'react-leaflet';
import { Crosshair } from 'lucide-react';

const RecenterButton = ({ coords }) => {
  const map = useMap();

  const handleClick = () => {
      map.setView(coords, 13); // Recenter without changing zoom
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-20 left-3 z-[1000] bg-white px-2 py-1 rounded shadow text-sm"
    >
      <Crosshair className="w-4 h-4 inline " />
    </button>
  );
};

export default RecenterButton;
