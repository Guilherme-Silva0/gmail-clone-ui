import { Image, ImageProps } from 'react-native'
import clsx from 'clsx'

type AvatarProps = ImageProps & {
  size?: 'small' | 'medium'
}

export function Avatar({ size = 'medium', ...rest }: AvatarProps) {
  return (
    <Image
      alt="Avatar"
      {...rest}
      className={clsx('rounded-full', {
        'size-9': size === 'small',
        'size-12': size === 'medium',
      })}
    />
  )
}
