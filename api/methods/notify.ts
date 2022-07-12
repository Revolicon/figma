const Notify = ({ data, callback }: ListenerOptions) => {
  let {
    message,
    timeout = 3000,
    error = false
  } = data

  figma.notify(message, {
    timeout,
    error
  })
}

export default Notify
