import { FC, CSSProperties, forwardRef, Ref } from 'react'
import * as RadixSlider from '@radix-ui/react-slider'
import tw from 'twin.macro'

type Styles = {
  root?: CSSProperties
  track?: CSSProperties
  thumb?: CSSProperties
  range?: CSSProperties
}
type ClassNames = {
  root?: string
  track?: string
  thumb?: string
}

export type SliderProps = {
  style?: CSSProperties
  className?: string
  styles?: Styles
  classNames?: ClassNames
  min?: number
  max?: number
  /**
   * 1: infinite
   */
  step?: number
  ref?: Ref<HTMLSpanElement>
  value?: number
  onChange?: (value: number) => void
}

export const Slider: FC<SliderProps> = forwardRef<HTMLSpanElement, SliderProps>(
  ({ style, className, classNames, styles, min = 0, max = 100, value = 0, onChange, step = 10 }, forwardedRef) => {
    const trackGrid = tw`w-[3px] h-full rounded-t-full`

    const rangeGrids = (val: number) => {
      const first = Math.trunc((val - min) / step) + 1
      const last = Math.trunc((max - val) / step)

      return {
        first,
        last,
      }
    }

    const onChangeValueHandler = (val: number[]) => {
      onChange?.(val[0])
    }

    if (value < min) {
      throw new Error('min is greater than value.')
    }
    if (max < value) {
      throw new Error('value is greater than max.')
    }

    return (
      <div>
        <RadixSlider.Root
          ref={forwardedRef}
          tw="relative select-none inline-flex h-3 items-center justify-between min-w-[200px] border-primary-main border-l-2 border-r-2"
          className={className ?? classNames?.root}
          style={style ?? styles?.root}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={onChangeValueHandler}
        >
          <RadixSlider.Track
            tw="relative flex-grow h-0.5 rounded-full outline-none bg-primary-main/40"
            className={classNames?.track}
            style={styles?.track}
          >
            <RadixSlider.Range tw="absolute top-0 rounded-full bg-primary-main h-full" style={styles?.range} />
            <div tw="absolute top-0 w-full h-full flex justify-between">
              {[...Array(rangeGrids(value).first)].map((_, index) => (
                <div key={index} css={[trackGrid]} tw="bg-white/80"></div>
              ))}
              {[...Array(rangeGrids(value).last)].map((_, index) => (
                <div key={index} css={[trackGrid]} tw="bg-black/80"></div>
              ))}
            </div>
          </RadixSlider.Track>
          <RadixSlider.Thumb
            tw="block w-4 h-4 rounded-full ring-8 ring-primary-main/20 outline-none bg-primary-main"
            data-tip="1.0"
            className={classNames?.thumb}
            style={styles?.thumb}
          >
            <div id="tooltip" tw="w-12 relative -top-14 -left-4">
              <div
                id="tooltip-default"
                role="tooltip"
                tw="min-w-full absolute text-xl text-white bg-primary-main rounded-lg flex justify-center items-center p-2"
              >
                <div tw="mx-auto absolute top-8 left-[0.3em] w-0 h-0 border-l-[17px] border-l-transparent border-t-[17px] border-t-primary-main border-r-[17px] border-r-transparent"></div>

                {value}
              </div>
            </div>
          </RadixSlider.Thumb>
        </RadixSlider.Root>

        <div tw="flex mt-2 text-2xl justify-between">
          <div>
            Min : <span>{min}</span>
          </div>
          <div>
            Max : <span>{max}</span>
          </div>
        </div>
      </div>
    )
  },
)
Slider.displayName = 'Slider'

export default Slider
