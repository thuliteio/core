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

lazySizes.cfg.nativeLoading = {
    setLoadingAttribute: true,
    disableListeners: {
        scroll: true
    }
};
