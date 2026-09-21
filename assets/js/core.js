// https://github.com/GoogleChromeLabs/quicklink
import { listen } from 'quicklink/dist/quicklink.mjs';
listen({
    ignores: [
        /\/api\/?/,
        uri => uri.includes('.zip'),
        (uri, elem) => elem.hasAttribute('noprefetch'),
        (uri, elem) => elem.hash && elem.pathname === window.location.pathname,
    ]
});

// https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';

try {
    lazySizes.cfg.nativeLoading = {
        setLoadingAttribute: true,
        disableListeners: {
            scroll: true
        }
    };

    // Additional performance optimizations
    lazySizes.cfg.lazyClass = 'lazy';
    lazySizes.cfg.loadedClass = 'loaded';
    lazySizes.cfg.loadingClass = 'loading';
    lazySizes.cfg.expFactor = 1.5; // Preload images 1.5x viewport before they enter

    if (typeof document !== 'undefined') {
        document.documentElement.classList.add('lazysizes-enabled');
    }
} catch (error) {
    if (typeof console !== 'undefined' && console.warn) {
        console.warn('lazySizes initialization failed:', error);
    }
}
