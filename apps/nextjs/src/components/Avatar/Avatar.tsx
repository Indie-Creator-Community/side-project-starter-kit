import Image from 'next/image';

export interface AvatarProps {
  /**
   * Specify an optional alt text for the image
   */
  altText?: string;

  /**
   * Specify an optional image url
   */
  imgUrl?: string;
}

/**
 * Avatars are used to show a thumbnail representation of an individual or business in the interface.
 */
export const Avatar = ({ altText = 'avatar image', imgUrl = '/assets/default-avatar.svg' }: AvatarProps) => {
  return (
    <div className="relative h-6 w-6 rounded-full">
      <Image className="rounded-full" src={imgUrl} alt={altText} width={24} height={24} />
    </div>
  );
};
