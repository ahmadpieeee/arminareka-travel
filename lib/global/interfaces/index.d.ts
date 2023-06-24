export {}

declare global {
  export interface AboutData {
    data: {
      id: number
      attributes: {
        title: string
        content: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        locale: string
        localizations: {
          data: unknown[]
        }
      }
    }
    meta: {}
  }
}
