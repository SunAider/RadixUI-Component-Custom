import { CSSProperties, FC, ReactNode, ComponentPropsWithoutRef } from 'react'
import tw from 'twin.macro'

export type Styles = {
  table?: CSSProperties
  headerRow?: CSSProperties
  headerColumn?: CSSProperties
  bodyRow?: CSSProperties
  bodyColumn?: CSSProperties
  footer?: CSSProperties
}

export type ClassNames = {
  table?: string
  headerRow?: string
  headerColumn?: string
  bodyRow?: string
  bodyColumn?: string
  footer?: string
}

export type Row = {
  [key: string]: ReactNode
}

export type Column = {
  title?: string
  key: string
  width?: number
  render?: (data: ReactNode, record: Row, index: number) => ReactNode
}

export type TableBaseProps = ComponentPropsWithoutRef<'table'> & {
  columns: Column[]
  rows?: Row[]
  footer?: ReactNode
  hasHeader?: boolean
  classNames?: ClassNames
  styles?: Styles
}
export const TableBase: FC<TableBaseProps> = ({
  columns,
  rows = [],
  footer,
  hasHeader = true,
  className,
  classNames,
  style,
  styles,
  ...props
}) => {
  return (
    <table {...props} className={className ?? classNames?.table} style={style ?? styles?.table}>
      {hasHeader && (
        <thead>
          <tr className={classNames?.headerRow} style={styles?.headerRow}>
            {columns?.map((col) => (
              <td
                key={col.key}
                css={[{ width: col.width }]}
                className={classNames?.headerColumn}
                style={styles?.headerColumn}
              >
                {col.title}
              </td>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={`row:${index}`} className={classNames?.bodyRow} style={styles?.bodyRow}>
            {columns.map((col) => (
              <td
                key={`row:${col.key}:${index}`}
                css={[!hasHeader && index === 0 && { width: col.width }]}
                className={classNames?.bodyColumn}
                style={styles?.bodyColumn}
              >
                {col.render ? col.render(row[col.key], row, index) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            <td colSpan={columns.length} className={classNames?.footer} style={styles?.footer}>
              {footer}
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  )
}

type Props = TableBaseProps & {
  variant: 'standard' | 'custom'
  textAlign?: 'top' | 'middle' | 'bottom'
}
const Table: FC<Props> = ({ variant = 'standard', css, textAlign = 'top', ...props }) => {
  const standardStyle = tw`[>thead]:(text-primary-main border-b border-primary-main) [td]:(p-3.5) text-sm table-auto [>tbody>tr]:(border-b border-grayline-main bg-gray-main) [>tfoot]:(bg-gray-main)`
  const textAlignStyle = {
    top: tw`[>tbody_td]:align-top`,
    middle: tw`[>tbody_td]:align-middle`,
    bottom: tw`[>tbody_td]:align-bottom`,
  }

  if (variant === 'standard') return <TableBase {...props} css={[standardStyle, textAlignStyle[textAlign], css]} />

  return <TableBase {...props} css={[textAlignStyle[textAlign], css]} />
}

export default Table
