/*
 * Listener Event Interface
 */
interface ListenerOptions {
  event: string
  data?: any
  callback?: (data: any) => void
}
