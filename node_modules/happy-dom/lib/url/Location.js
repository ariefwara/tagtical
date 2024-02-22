var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Location_browserFrame;
import URL from './URL.js';
import * as PropertySymbol from '../PropertySymbol.js';
/**
 * Location.
 */
export default class Location extends URL {
    /**
     * Constructor.
     *
     * @param browserFrame Browser frame.
     * @param url URL.
     */
    constructor(browserFrame, url) {
        super(url);
        _Location_browserFrame.set(this, void 0);
        __classPrivateFieldSet(this, _Location_browserFrame, browserFrame, "f");
    }
    /**
     * Override set href.
     */
    // @ts-ignore
    set href(url) {
        __classPrivateFieldGet(this, _Location_browserFrame, "f").goto(url).catch((error) => __classPrivateFieldGet(this, _Location_browserFrame, "f").page.console.error(error));
    }
    /**
     * Override set href.
     */
    get href() {
        // @ts-ignore
        return super.href;
    }
    /**
     * Replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
     *
     * @param url URL.
     */
    replace(url) {
        this.href = url;
    }
    /**
     * Loads the resource at the URL provided in parameter.
     *
     * @param url URL.
     */
    assign(url) {
        this.href = url;
    }
    /**
     * Reloads the resource from the current URL.
     */
    reload() {
        __classPrivateFieldGet(this, _Location_browserFrame, "f")
            .goto(this.href)
            .catch((error) => __classPrivateFieldGet(this, _Location_browserFrame, "f").page.console.error(error));
    }
    /**
     * Replaces the current URL state with the provided one without navigating to the new URL.
     *
     * @param browserFrame Browser frame that must match the current one as validation.
     * @param url URL.
     */
    [(_Location_browserFrame = new WeakMap(), PropertySymbol.setURL)](browserFrame, url) {
        if (__classPrivateFieldGet(this, _Location_browserFrame, "f") !== browserFrame) {
            throw new Error('Failed to set URL. Browser frame mismatch.');
        }
        // @ts-ignore
        super.href = url;
    }
}
//# sourceMappingURL=Location.js.map