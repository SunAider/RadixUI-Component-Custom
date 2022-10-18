import * as UI from '@dart-s/darts-ui'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <section>
          <h3>Component list</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', color: '#333', backgroundColor: '#eee' }}>
            <div>
              <h4>Accordion</h4>
              <UI.Accordion
                items={[
                  { id: '1', header: 'header title', content: 'content message' },
                  { id: '2', header: 'header title', content: 'content message' },
                ]}
              />
            </div>
            <div>
              <h4>AlertDialog</h4>
              <UI.AlertDialog trigger={<UI.Button>ボタン</UI.Button>} title={`title`}>
                Content message
              </UI.AlertDialog>
            </div>
            <div>
              <h4>Avatar</h4>
              <UI.Avatar />
            </div>
            <div>
              <h4>Button</h4>
              <UI.Button>こんにちは</UI.Button>
            </div>
            <div>
              <h4>CheckBox</h4>
              <UI.CheckBox label="label text" />
            </div>
            <div>
              <h4>DartsLogo</h4>
              <UI.DartsLogo variant="darts" color="default" />
            </div>
            <div>
              <h4>Dialog</h4>
              <UI.Dialog trigger={<UI.Button>Open</UI.Button>} title="title">
                description
              </UI.Dialog>
            </div>
            <div>
              <h4>DropDownMenu</h4>
              <UI.DropdownMenu title={['aaaa', 'bbbb']} />
            </div>
            <div>
              <h4>HoverCard</h4>
              <UI.HoverCard trigger={<UI.Button>ボタン</UI.Button>}>
                <span style={{ color: 'black' }}>aaa</span>
              </UI.HoverCard>
            </div>
            <div>
              <h4>IconButton</h4>
              {/* <UI.IconButton /> */}
            </div>
            <div>
              <h4>IframeModal</h4>
              <UI.IframeModal />
            </div>
            <div>
              <h4>Popover</h4>
              <UI.Popover />
            </div>
            <div>
              <h4>RadioGroup</h4>
              <UI.RadioGroup
                items={[
                  { id: '1', label: 'label text1', value: '1' },
                  { id: '2', label: 'label text2', value: '2' },
                ]}
              />
            </div>
            <div>
              <h4>ScrollArea</h4>
              <UI.ScrollArea>
                {[...Array(100)].map((_, idx) => (
                  <p key={idx}>text message</p>
                ))}
              </UI.ScrollArea>
            </div>
            <div>
              <h4>Select</h4>
              <UI.Select />
            </div>
            <div>
              <h4>Slider</h4>
              <UI.Slider />
            </div>
            <div>
              <h4>Switch</h4>
              <UI.Switch />
            </div>
            <div>
              <h4>Tabs</h4>
              <UI.Tabs
                items={[
                  { title: '1', content: 'label text1', value: '1' },
                  { title: '2', content: 'label text2', value: '2' },
                ]}
              />
            </div>
            <div>
              <h4>TextField</h4>
              <UI.TextField type="text" value={''} placeHolder="placeHolder" />
            </div>
            <div>
              <h4>Toast</h4>
              <UI.Toast title="title">content</UI.Toast>
            </div>
            <div>
              <h4>Toggle</h4>
              <UI.Toggle />
            </div>
            <div>
              <h4>ToggleGroup</h4>
              {/*  Hydration failed because the initial UI does not match what was rendered on the server : items */}
              <UI.ToggleGroup
                type="single"
                items={[
                  { content: <UI.Toggle />, value: 'value1' },
                  { content: <UI.Toggle />, value: 'value2' },
                ]}
              ></UI.ToggleGroup>
            </div>
            <div>
              <h4>Tooltip</h4>
              <UI.Tooltip />
            </div>
            <div>
              <h4>IframeModal</h4>
              <UI.IframeModal src={`https://darts.ne.jp/`} />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home