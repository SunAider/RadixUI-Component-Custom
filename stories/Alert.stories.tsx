import { ComponentMeta, ComponentStory } from '@storybook/react'
import Component from '~/Alert'
import 'twin.macro'

export default {
  component: Component,
} as ComponentMeta<typeof Component>

export const Default: ComponentStory<typeof Component> = (props) => {
  return (
    <div>
      <Component {...props} />
    </div>
  )
}

export const Catalog: ComponentStory<typeof Component> = (props) => {
  return (
    <div tw="flex-col space-y-4">
      <Component
        {...props}
        condition="success"
        description="運営に関する情報が未設定です。こちらから設定をしてください。"
      />
      <Component {...props} condition="success" description="未设置管理信息。请从这里设置。" hasCloseButton={false} />
      <Component
        {...props}
        condition="info"
        description="プロジェクト概要が未設定です。こちらから設定をしてください。"
      />
      <Component
        {...props}
        condition="info"
        description="You have not set project contents and information about management yet. Click this link and set your contents."
        hasCloseButton={false}
      />
      <Component
        {...props}
        condition="warning"
        description="運営に関する情報が未設定です。こちらから設定をしてください。"
      />
      <Component
        {...props}
        condition="warning"
        description="運営に関する情報が未設定です。こちらから設定をしてください。運営に関する情報が未設定です。こちらから設定をしてください運営に関する情報が未設定です。こちらから設定をしてください"
      />
      <Component
        {...props}
        condition="error"
        description="プロジェクト概要が未設定です。こちらから設定をしてください。"
      />
      <Component
        {...props}
        condition="error"
        description="プロジェクト概要が未設定です。こちらから設定をしてください。https://www.google.com/search?q=Google&oq=Google&aqs=chrome..69i57j0i131i433i512j69i59j0i131i433i512l3j69i60l2.1643j0j7&sourceid=chrome&ie=UTF-8"
        hasCloseButton={false}
      />
    </div>
  )
}
