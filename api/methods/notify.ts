const Notify = ({ data }: ListenerOptions) => {
  let { message, timeout = 4000, error = false } = data

  figma.notify("[Revolicon] " + message, {
    timeout,
    error,
  })
}

export default Notify
