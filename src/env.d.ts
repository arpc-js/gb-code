/// <reference types="vite/client" />

declare interface Window {
    __SSR_DATA__?: Record<string, any>;
}
