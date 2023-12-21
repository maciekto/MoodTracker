import { type FC } from 'react'

import iconAngry from '@/assets/icons/angryIcon.svg'
import iconFunny from '@/assets/icons/funnyIcon.svg'
import iconHappy from '@/assets/icons/happyIcon.svg'
import iconNormal from '@/assets/icons/normalIcon.svg'
import iconSad from '@/assets/icons/sadIcon.svg'
import { cn } from '@/lib/utils'

const ICONS = {
  sad: {src: iconSad.src, alt: 'sad'},
  angry: {src: iconAngry.src, alt: 'angry'},
  normal: {src: iconNormal.src, alt: 'normal'},
  happy: {src: iconHappy.src, alt: 'happy'},
  funny: {src: iconFunny.src, alt: 'funny'}
}

const SIZE = {
  default: 'w-12 h-12',
  small: 'w-8 h-8',
  large: 'w-16 h-16',
}

type IconImageNativeProps = {
  alt?: string
  src?: string
  type?: string
  size?: string
  className?: string
}
export type IconImageProps = IconImageNativeProps 

const IconImage: FC<IconImageProps> = ({
  alt,
  src,
  size = 'default',
  className,
  type
}) => {
  const iconClassName = cn( 
    size === 'default' ? null : `a-Icon--${size}`,
    className
  )

  return (
    type ? <img 
      src={ICONS[type as keyof typeof ICONS].src} 
      alt={ICONS[type as keyof typeof ICONS].alt} 
      width={SIZE[size as keyof typeof SIZE]} 
      height={SIZE[size as keyof typeof SIZE]} 
      className={cn('w-full h-full  transition-all duration-300 ease-in-out hover:animate-levitate ',
        size ? SIZE[size as keyof typeof SIZE] : '',
        iconClassName)}/> 
      :
      <img
        alt={alt}
        src={src}
        width={SIZE[size as keyof typeof SIZE]} 
        height={SIZE[size as keyof typeof SIZE]} 
        className={cn('w-full h-full',
          size ? SIZE[size as keyof typeof SIZE] : '',
          iconClassName)}
      />
  )
}

export default IconImage
