const Screen = ({ data }: ListenerOptions) => {
  const size = {
    default: 280,
    wide: 561,
  }

  figma.ui.resize(size[data] ?? 'default', 512)
}

export default Screen
