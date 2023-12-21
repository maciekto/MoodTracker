
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

type iconsType = keyof typeof ICONS

const SIZE = {
  default: 'w-12 h-12',
  small: 'w-8 h-8',
  large: 'w-16 h-16',
}

type sizeType = keyof typeof SIZE

export type IconImageProps = {
  size?: string
  className?: string
} & ({
  alt: string,
  src: string,
} | {
  type: string
})


const IconImage  = ({
  size = 'default',
  className,
  ...props
} : IconImageProps) => {
  let img

  if('type' in props && props.type !== undefined) {
    img = 
    <img 
      src={ICONS[props.type as iconsType].src} 
      alt={ICONS[props.type as iconsType].alt} 
      width={SIZE[size as sizeType]} 
      height={SIZE[size as sizeType]} 
      className={cn('w-full h-full transition-all duration-300 ease-in-out hover:animate-levitate ',
        size ? SIZE[size as sizeType] : '',
        className)}/> 
  } else if ('src' in props && props.src !== undefined) {
    img = 
    <img
      alt={props.alt}
      src={props.src}
      width={SIZE[size as sizeType]} 
      height={SIZE[size as sizeType]} 
      className={cn('w-full h-full transition-all duration-300 ease-in-out hover:animate-levitate',
        size ? SIZE[size as sizeType] : '',
        className)}
    />
  }
  return img
}

export default IconImage
