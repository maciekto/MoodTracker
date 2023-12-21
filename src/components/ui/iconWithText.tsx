import React, {type FC} from 'react'

import { cn } from '@/lib/utils'

import IconImage from './icon'


type iconWithTextProps = {
  children: React.ReactNode,
  className?: string
  vertical?: boolean
  alt?: string,
  src?: string,
  size?: string
  type?: string
  imageClassName?: string
}

const IconWithText: FC<iconWithTextProps>  = ({ children, className,vertical,  imageClassName, ...props }) => (
  <div  className={cn(
    'flex items-stretch justify-between gap-2',
    vertical ? 'flex-col' : 'flex-row',
    className
  )}>
    <IconImage className={imageClassName} {...props}/>
    {children}
  </div>
)

export default IconWithText