import { CSSProperties, FC, useState } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import 'twin.macro'
import { Condition } from './@types'
import { IconButton } from '.'

const theme = {
  success: 'bg-success-lighten text-success-main',
  info: 'bg-info-lighten text-info-main',
  warning: 'bg-warn-lighten text-warn-main',
  error: 'bg-error-lighten text-error-main',
}

export type Styles = {
  root?: CSSProperties
  description?: CSSProperties
  closeButton?: CSSProperties
}

export type ClassNames = {
  root?: string
  description?: string
  closeButton?: string
}

export type AlertProps = {
  condition?: Condition
  description?: string
  hasCloseButton?: boolean
  onClose?: () => void
  styles?: Styles
  classNames?: ClassNames
}

const Alert: FC<AlertProps> = ({
  condition = 'success',
  description,
  hasCloseButton = true,
  onClose,
  styles,
  classNames,
}) => {
  const onClickHandler = () => {
    onClose?.()
  }

  return (
    <div
      tw="flex items-center rounded py-2 pl-4 pr-1"
      className={`${theme[condition]} ${classNames?.root}`}
      style={styles?.root}
    >
      <p
        tw="flex-1 text-base font-primary break-words min-w-0 pr-3"
        className={classNames?.description}
        style={styles?.description}
      >
        {description}
      </p>
      {hasCloseButton && (
        <IconButton
          tw="flex-none bg-transparent shadow-none"
          className={classNames?.closeButton}
          style={styles?.closeButton}
          onClick={onClickHandler}
          // TODO: change icon
          icon={<Cross1Icon tw="h-3.5 w-3.5" />}
        />
      )}
    </div>
  )
}

export default Alert
