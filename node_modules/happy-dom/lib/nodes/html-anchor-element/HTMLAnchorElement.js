var _a, _b, _c;
import HTMLElement from '../html-element/HTMLElement.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import DOMTokenList from '../../dom-token-list/DOMTokenList.js';
import HTMLAnchorElementUtility from './HTMLAnchorElementUtility.js';
import HTMLAnchorElementNamedNodeMap from './HTMLAnchorElementNamedNodeMap.js';
import EventPhaseEnum from '../../event/EventPhaseEnum.js';
/**
 * HTML Anchor Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement.
 */
class HTMLAnchorElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this[_a] = new HTMLAnchorElementNamedNodeMap(this);
        this[_b] = null;
        this[_c] = null;
    }
    /**
     * Returns download.
     *
     * @returns download.
     */
    get download() {
        return this.getAttribute('download') || '';
    }
    /**
     * Sets download.
     *
     * @param download Download.
     */
    set download(download) {
        this.setAttribute('download', download);
    }
    /**
     * Returns hash.
     *
     * @returns Hash.
     */
    get hash() {
        return this[PropertySymbol.url]?.hash ?? '';
    }
    /**
     * Sets hash.
     *
     * @param hash Hash.
     */
    set hash(hash) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].hash = hash;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns href.
     *
     * @returns Href.
     */
    get href() {
        if (this[PropertySymbol.url]) {
            return this[PropertySymbol.url].toString();
        }
        return this.getAttribute('href') || '';
    }
    /**
     * Sets href.
     *
     * @param href Href.
     */
    set href(href) {
        this.setAttribute('href', href);
    }
    /**
     * Returns hreflang.
     *
     * @returns Hreflang.
     */
    get hreflang() {
        return this.getAttribute('hreflang') || '';
    }
    /**
     * Sets hreflang.
     *
     * @param hreflang Hreflang.
     */
    set hreflang(hreflang) {
        this.setAttribute('hreflang', hreflang);
    }
    /**
     * Returns the hyperlink's URL's origin.
     *
     * @returns Origin.
     */
    get origin() {
        return this[PropertySymbol.url]?.origin ?? '';
    }
    /**
     * Returns ping.
     *
     * @returns Ping.
     */
    get ping() {
        return this.getAttribute('ping') || '';
    }
    /**
     * Sets ping.
     *
     * @param ping Ping.
     */
    set ping(ping) {
        this.setAttribute('ping', ping);
    }
    /**
     * Returns protocol.
     *
     * @returns Protocol.
     */
    get protocol() {
        return this[PropertySymbol.url]?.protocol ?? '';
    }
    /**
     * Sets protocol.
     *
     * @param protocol Protocol.
     */
    set protocol(protocol) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].protocol = protocol;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns username.
     *
     * @returns Username.
     */
    get username() {
        return this[PropertySymbol.url]?.username ?? '';
    }
    /**
     * Sets username.
     *
     * @param username Username.
     */
    set username(username) {
        if (this[PropertySymbol.url] &&
            !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url]) &&
            this[PropertySymbol.url].host &&
            this[PropertySymbol.url].protocol != 'file') {
            this[PropertySymbol.url].username = username;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns password.
     *
     * @returns Password.
     */
    get password() {
        return this[PropertySymbol.url]?.password ?? '';
    }
    /**
     * Sets password.
     *
     * @param password Password.
     */
    set password(password) {
        if (this[PropertySymbol.url] &&
            !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url]) &&
            this[PropertySymbol.url].host &&
            this[PropertySymbol.url].protocol != 'file') {
            this[PropertySymbol.url].password = password;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns pathname.
     *
     * @returns Pathname.
     */
    get pathname() {
        return this[PropertySymbol.url]?.pathname ?? '';
    }
    /**
     * Sets pathname.
     *
     * @param pathname Pathname.
     */
    set pathname(pathname) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].pathname = pathname;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns port.
     *
     * @returns Port.
     */
    get port() {
        return this[PropertySymbol.url]?.port ?? '';
    }
    /**
     * Sets port.
     *
     * @param port Port.
     */
    set port(port) {
        if (this[PropertySymbol.url] &&
            !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url]) &&
            this[PropertySymbol.url].host &&
            this[PropertySymbol.url].protocol != 'file') {
            this[PropertySymbol.url].port = port;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns host.
     *
     * @returns Host.
     */
    get host() {
        return this[PropertySymbol.url]?.host ?? '';
    }
    /**
     * Sets host.
     *
     * @param host Host.
     */
    set host(host) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].host = host;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns hostname.
     *
     * @returns Hostname.
     */
    get hostname() {
        return this[PropertySymbol.url]?.hostname ?? '';
    }
    /**
     * Sets hostname.
     *
     * @param hostname Hostname.
     */
    set hostname(hostname) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].hostname = hostname;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns referrerPolicy.
     *
     * @returns Referrer Policy.
     */
    get referrerPolicy() {
        return this.getAttribute('referrerPolicy') || '';
    }
    /**
     * Sets referrerPolicy.
     *
     * @param referrerPolicy Referrer Policy.
     */
    set referrerPolicy(referrerPolicy) {
        this.setAttribute('referrerPolicy', referrerPolicy);
    }
    /**
     * Returns rel.
     *
     * @returns Rel.
     */
    get rel() {
        return this.getAttribute('rel') || '';
    }
    /**
     * Sets rel.
     *
     * @param rel Rel.
     */
    set rel(rel) {
        this.setAttribute('rel', rel);
    }
    /**
     * Returns rel list.
     *
     * @returns Rel list.
     */
    get relList() {
        if (!this[PropertySymbol.relList]) {
            this[PropertySymbol.relList] = new DOMTokenList(this, 'rel');
        }
        return this[PropertySymbol.relList];
    }
    /**
     * Returns search.
     *
     * @returns Search.
     */
    get search() {
        return this[PropertySymbol.url]?.search ?? '';
    }
    /**
     * Sets search.
     *
     * @param search Search.
     */
    set search(search) {
        if (this[PropertySymbol.url] && !HTMLAnchorElementUtility.isBlobURL(this[PropertySymbol.url])) {
            this[PropertySymbol.url].search = search;
            this.setAttribute('href', this[PropertySymbol.url].toString());
        }
    }
    /**
     * Returns target.
     *
     * @returns target.
     */
    get target() {
        return this.getAttribute('target') || '';
    }
    /**
     * Sets target.
     *
     * @param target Target.
     */
    set target(target) {
        this.setAttribute('target', target);
    }
    /**
     * Returns text.
     *
     * @returns text.
     */
    get text() {
        return this.textContent;
    }
    /**
     * Sets text.
     *
     * @param text Text.
     */
    set text(text) {
        this.textContent = text;
    }
    /**
     * Returns type.
     *
     * @returns Type.
     */
    get type() {
        return this.getAttribute('type') || '';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttribute('type', type);
    }
    /**
     * @override
     */
    toString() {
        return this.href;
    }
    /**
     * @override
     */
    dispatchEvent(event) {
        const returnValue = super.dispatchEvent(event);
        if (event.type === 'click' &&
            (event.eventPhase === EventPhaseEnum.atTarget ||
                event.eventPhase === EventPhaseEnum.bubbling) &&
            !event.defaultPrevented &&
            this[PropertySymbol.url]) {
            this[PropertySymbol.ownerDocument][PropertySymbol.ownerWindow].open(this[PropertySymbol.url].toString(), this.target || '_self');
            if (this[PropertySymbol.ownerDocument][PropertySymbol.ownerWindow].closed) {
                event.stopImmediatePropagation();
            }
        }
        return returnValue;
    }
}
_a = PropertySymbol.attributes, _b = PropertySymbol.relList, _c = PropertySymbol.url;
export default HTMLAnchorElement;
//# sourceMappingURL=HTMLAnchorElement.js.map