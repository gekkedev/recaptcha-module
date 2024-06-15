import Vue from 'vue'

export interface ReCaptchaInstance {
  /**
   * Toggles badge element visibility (v3)
   */
  hideBadge?: boolean

  /**
   * ReCaptcha language (v2)
   */
  language?: string

  /**
   * ReCaptcha mode.
   */
  mode?: 'base' | 'enterprise'

  /**
   * Site key to send requests
   */
  siteKey: string

  /**
   * Size of the widget (v2)
   */
  size?: 'compact' | 'normal' | 'invisible'

  /**
   * Version
   */
  version: number

  /**
   * Destroy ReCaptcha
   */
  destroy(): void

  /**
   * Returns a verify token (v3)
   * @param action
   */
  execute(action: string): Promise<string>

  /**
   * Returns a verify token (v2)
   */
  getResponse(): Promise<string>

  /**
   * Initialize ReCaptcha
   */
  init(): Promise<any>

  /**
   * Reset ReCaptcha (v2)
   */
  reset(widgetId?: number): void

  /**
   * Render ReCaptcha (v2)
   */
  render(reference: string, { siteKey, theme } : { siteKey: string, theme?: string }): number
}

declare module 'vue/types/vue' {
  interface Vue {
    $recaptcha: ReCaptchaInstance
  }
}
