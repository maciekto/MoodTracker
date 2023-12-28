import React from 'react'

import { cn } from '@/lib/utils'

import IconImage from './icon'


type IconWithTextProps = {
  children: React.ReactNode,
  className?: string
  vertical?: boolean
  imageClassName?: string
  size?: string
} & ({
  alt: string,
  src: string,
} | {
  type: string
})

const IconWithText = ({ children, className,vertical,  imageClassName, ...props } : IconWithTextProps) => (
  <div  className={cn(
    'flex items-stretch justify-between gap-2 cursor-pointer',
    vertical ? 'flex-col' : 'flex-row',
    className
  )}>
    <IconImage className={imageClassName} {...props}/>
    {children}
  </div>
)

export default IconWithText