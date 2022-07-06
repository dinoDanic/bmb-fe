import { Container, PositionMods, SizeMods } from '@kodiui/kodiui'
import { theme } from 'styles'

export const LoaderIcon = () => {
  const stroke = theme.color.white
  const fill = theme.color.white
  return (
    <Container
      modifiers={[
        PositionMods.Absolute,
        SizeMods({ height: '24px', width: '24px' }),
      ]}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 58 58"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(2 1)" stroke={stroke} strokeWidth="1.5">
            <circle cx="42.601" cy="11.462" r="5" fillOpacity="1" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="1;0;0;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="49.063" cy="27.063" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;1;0;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="42.601" cy="42.663" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;1;0;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;0;1;0;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="11.399" cy="42.663" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;0;0;1;0;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="4.938" cy="27.063" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;0;0;0;1;0;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="11.399" cy="11.462" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;0;0;0;0;1;0"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="27" cy="5" r="5" fillOpacity="0" fill={fill}>
              <animate
                attributeName="fill-opacity"
                begin="0s"
                dur="1.3s"
                values="0;0;0;0;0;0;0;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </Container>
  )
}
