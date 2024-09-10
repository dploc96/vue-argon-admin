/** It is used to declare the type of the import.meta object */
declare namespace Env {
  /** Interface for import.meta */
  interface ImportMeta extends ImportMetaEnv {
    /** The base url of the application */
    readonly VITE_BASE_URL: string
    /** The prefix of the iconify icon */
    readonly VITE_ICON_PREFIX: 'icon'
    /**
     * The prefix of the local icon
     *
     * This prefix is start with the icon prefix
     */
    readonly VITE_ICON_LOCAL_PREFIX: 'local-icon'
  }

  /** Used in the runtime.config.js file */
  type Runtime = keyof ImportMeta
}

interface ImportMeta {
  readonly env: Env.ImportMeta
}
