const User = ({}: ListenerOptions) => {
  figma.ui.postMessage({
    event: "user",
    data: figma.currentUser,
  })
}

export default User
