import Link from 'next/link';
import Image from 'next/image';
import { star } from '@/assets/assets';
import { formatPrice, getBrandLogo } from '@/utils';
import { CardProps } from '@/redux';

interface ProductCardProps {
  cardDetails: CardProps;
}

const Card: React.FC<ProductCardProps> = ({ cardDetails }) => {
  const { id, image, price, brandLogo, name, rating } = cardDetails;

  const brandLogoSrc = getBrandLogo(brandLogo);

  return (
    <div className="w-full lg:max-w-[314px] text-text-secondary bg-white rounded-2xl shadow-lg overflow-hidden">
      <Link href={`/product/${id}`} aria-label={`View details for ${name}`}>
        <Image
          src={image}
          alt={`${name} product image`}
          width={100}
          height={100}
          className="w-full h-[214px] object-cover"
        />
      </Link>
      <div className="p-4 space-y-2">
        <p className="text-base font-medium text-text-primary">{name}</p>
        <p className="text-lg font-semibold text-primary">
          ₦{formatPrice(price)}
        </p>
        <div className="flex justify-between items-center">
          {brandLogoSrc && (
            <Image
              src={brandLogoSrc}
              alt={`${name} brand logo`}
              width={100}
              height={100}
              className="w-14 h-4 "
            />
          )}
          <div className="flex items-center gap-x-1 text-sm">
            <Image src={star} alt="star icon" />
            <p className="font-medium">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
