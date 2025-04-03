export type BonsaiPhoto = {
  id: string;
  title: string;
  description: string;
  image: { url: string };
  country: string;
  takenAt: string;
  tags: string[];
};
