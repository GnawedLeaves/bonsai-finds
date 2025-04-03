import { useEffect, useState } from "react";
import { getBonsaiPhotos } from "../../lib/hygraph";

type BonsaiPhoto = {
  id: string;
  title: string;
  description: string;
  image: { url: string };
  country: string;
  takenAt: string;
  tags: string[];
};

const BonsaiGallery = () => {
  const [photos, setPhotos] = useState<BonsaiPhoto[]>([]);

  useEffect(() => {
    getBonsaiPhotos().then((data) => setPhotos(data.bonsaiPhotos));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="border p-4 rounded shadow-md">
          <img
            src={photo.image.url}
            alt={photo.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{photo.title}</h2>
          <p>{photo.description}</p>
          <p className="text-sm text-gray-500">
            {photo.country} - {new Date(photo.takenAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BonsaiGallery;
