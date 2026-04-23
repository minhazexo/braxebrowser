export {}

declare global {
  interface Window {
    braxeAPI: {
      ping: (message: string) => Promise<string>
    }
  }
}
