import { ReactNode } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '~/Button'
import Component, { Column } from '~/Table'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

const buttonOnClick = (data: { [key: string]: ReactNode }) => {
  const txt = `${Object.keys(data).map((key) => {
    return `${key}: ${data[key]}\n`
  })}`
  alert('onClick!\n' + txt)
}

const date = new Date()
const list = [
  { position: '企画者', name: '表示名' },
  { position: '編集者', name: '表示名' },
  { position: '著作者', name: '表示名' },
  { position: '製作者', name: '表示名' },
]

const columns: Column[] = [
  {
    title: 'アイテム',
    key: 'item',
    width: 100,
  },
  {
    title: '',
    key: 'name',
  },
  {
    title: 'シリーズ',
    key: 'series',
  },
  {
    title: '販売形式',
    key: 'pattern',
    render: (data) => (
      <div
        className={`border bg-opacity-10 border-opacity-30 inline-block px-2 py-0.5 rounded-sm font-bold  ${
          data === '指値販売' && 'text-other-designatedsale border-other-designatedsale bg-other-designatedsale'
        } ${data === 'オークション' && 'text-[#6C62DB] border-[#6c62DB] bg-[#6C62DB]'}`}
      >
        {data}
      </div>
    ),
  },
  {
    title: '販売価格',
    key: 'price',
    render: (data) => <span className="font-bold">{data}</span>,
  },
  {
    title: '販売期間（UTC+9）',
    key: 'period',
    render: (date) => <div>{date}</div>,
  },
  {
    title: 'リスト',
    key: 'list',
  },
  {
    title: '',
    key: 'action',
    render: (data, record, index) => (
      <Button variant="outlined" onClick={() => buttonOnClick(record)}>
        {data}
      </Button>
    ),
  },
]
const rows = [
  {
    item: (
      <img
        src="https://images.unsplash.com/photo-1665355417090-718ee9f12e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
        alt="aaa"
        className="rounded-md"
      />
    ),
    name: 'アイテム名',
    series: 'シリーズ名',
    pattern: '指値販売',
    price: '123 CBI',
    period: (
      <div>
        {date.getFullYear()}-{('00' + (date.getMonth() + 1)).slice(-2)}-{('00' + date.getDate()).slice(-2)}{' '}
        {('00' + date.getHours()).slice(-2)}:{('00' + date.getMinutes()).slice(-2)} ~<br />
        {date.getFullYear()}-{('00' + (date.getMonth() + 1)).slice(-2)}-{('00' + (date.getDate() + 2)).slice(-2)}{' '}
        {('00' + date.getHours()).slice(-2)}:{('00' + date.getMinutes()).slice(-2)}
      </div>
    ),
    action: '選択',
    list: (
      <ul>
        {list.map((item, index) => (
          <li key={`list${index}`}>
            {item.position}：{item.name}
          </li>
        ))}
      </ul>
    ),
  },
  {
    item: (
      <img
        src="https://images.unsplash.com/photo-1665355417090-718ee9f12e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80"
        alt="aaa"
        className="rounded-md "
      />
    ),
    name: 'アイテム名',
    series: 'シリーズ名',
    pattern: 'オークション',
    price: '123 CBI',
    period: '無期限',
    action: '選択',
    list: (
      <ul>
        {list.map((item, index) => (
          <li key={`list${index}`}>
            {item.position}：{item.name}
          </li>
        ))}
      </ul>
    ),
  },
]

export const Default: ComponentStory<typeof Component> = (props) => {
  return (
    <div className="bg-white p-8">
      <Component {...props} />
    </div>
  )
}
Default.args = {
  columns,
  rows,
  footer: <span>フッター</span>,
}

export const HeaderLess: ComponentStory<typeof Component> = (props) => {
  return (
    <div className="bg-white p-8">
      <Component {...props} />
    </div>
  )
}
HeaderLess.args = {
  hasHeader: false,
  columns,
  rows,
  footer: <span>フッター</span>,
}
export const FooterLess: ComponentStory<typeof Component> = (props) => {
  return (
    <div className="bg-white p-8">
      <Component {...props} />
    </div>
  )
}
FooterLess.args = {
  columns,
  rows,
}

export const Custom: ComponentStory<typeof Component> = (props) => {
  return (
    <div className="bg-white p-8">
      <Component {...props} />
    </div>
  )
}

Custom.args = {
  variant: 'custom',
  columns,
  rows,
  className: 'my-8 w-full',
  style: { backgroundColor: '#ff9999' },
  classNames: { headerColumn: 'p-8 text-white' },
  footer: (
    <div className="text-right">
      プランやオプションの変更、支払いは
      <button className="text-primary-main underline" onClick={() => alert('onClick')}>
        グループ管理画面
      </button>
      より支払い権限のある方が行えます。
    </div>
  ),
}
