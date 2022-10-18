import { FC, ReactNode, CSSProperties } from 'react'
import * as RadixAvatar from '@radix-ui/react-avatar'
import 'twin.macro'

type AvatarStyles = {
  root?: CSSProperties
  image?: CSSProperties
  alt?: CSSProperties
}
type AvatarClassNames = {
  root?: string
  image?: string
  alt?: string
}
export type AvatarProps = {
  src?: string
  variant?: string
  classNames?: AvatarClassNames
  styles?: AvatarStyles
}
export const Avatar: FC<AvatarProps> = ({ src, variant, classNames, styles }) => {
  return (
    <RadixAvatar.Root tw="relative inline-flex w-10 h-10 bg-white" className={classNames?.root} style={styles?.root}>
      {variant == 'Circle' ? (
        <RadixAvatar.Image
          src={src}
          tw="h-full w-full object-cover rounded-full"
          className={classNames?.image}
          style={styles?.image}
        />
      ) : (
        <RadixAvatar.Image
          src={src}
          tw="h-full w-full object-cover"
          className={classNames?.image}
          style={styles?.image}
        />
      )}
      <RadixAvatar.Fallback
        tw="flex h-full w-full  justify-center bg-white"
        className={classNames?.alt}
        style={styles?.alt}
      />
    </RadixAvatar.Root>
  )
}

export default Avatar
