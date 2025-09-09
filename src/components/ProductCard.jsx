import Image from 'next/image';
import Link from 'next/link';
import Badge from './ui/badge';
import { Button } from './ui/button';

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  slug,
  isNew,
  isBestseller,
  fabric,
  viewMode = 'grid', // Default to grid view
}) => {
  // GRID VIEW LAYOUT
  if (viewMode === 'grid') {
    return (
      <Link href={`/products/${slug}`} className="group block overflow-hidden rounded-lg border">
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && <Badge variant="destructive">New</Badge>}
            {isBestseller && <Badge variant="default">Bestseller</Badge>}
          </div>
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-primary">
            {name}
          </h3>
          <p className="text-sm text-foreground-muted mt-1">{fabric}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-xl font-bold text-foreground">₹{price.toLocaleString('en-IN')}</p>
            {originalPrice && (
              <p className="text-md text-foreground-muted line-through">
                ₹{originalPrice.toLocaleString('en-IN')}
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // LIST VIEW LAYOUT
  return (
    <Link href={`/products/${slug}`} className="group flex items-center gap-6 overflow-hidden rounded-lg border p-4 w-full">
      {/* Image container */}
      <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
         <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && <Badge variant="destructive" size="sm">New</Badge>}
            {isBestseller && <Badge variant="default" size="sm">Bestseller</Badge>}
          </div>
      </div>

      {/* Details container */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
          {name}
        </h3>
        <p className="text-md text-foreground-muted mt-1">{fabric}</p>
        <div className="mt-3 flex items-baseline gap-3">
          <p className="text-2xl font-bold text-foreground">₹{price.toLocaleString('en-IN')}</p>
          {originalPrice && (
            <p className="text-lg text-foreground-muted line-through">
              ₹{originalPrice.toLocaleString('en-IN')}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" className="mt-4 w-fit">
          View Details
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;