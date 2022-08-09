export const useColorMode = (settings: any) => {
  const { appearance, app } = settings.state

  return (appearance === 'auto' ? app.theme : appearance) ?? 'light'
}
