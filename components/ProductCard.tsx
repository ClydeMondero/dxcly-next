// components/ProductCard.tsx
interface Props {
  title: string;
  price: string;
  image: string;
  className?: string;
}

export function ProductCard({ title, price, image, className }: Props) {
  return (
    <div
      className={`relative rounded-2xl bg-surface p-4 md:p-6 ${className} border-2 hover:border-primary`}
    >
      {/* Floating Title + Price */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-black px-4 py-2 rounded-full border border-neutral-800 cursor-pointer z-20">
        <span className="font-semibold text-white">{title}</span>
        <span className="bg-primary text-white px-4 py-1 rounded-full font-semibold">
          {price}
        </span>
      </div>

      {/* Image */}
      <div className="flex h-full items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-64 object-contain hover:scale-105"
        />
      </div>
    </div>
  );
}
