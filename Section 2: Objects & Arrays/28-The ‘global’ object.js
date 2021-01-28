globalThis
Window  { window: Window, self: Window, document: document, name: "", location: Location,  … }

window
Window  { window: Window, self: Window, document: document, name: "", location: Location,  … }

globalThis === window;
true

function abc() {};
undefined

globalThis.abc;
ƒ abc() {}

var xyz = 4;
undefined

globalThis.xyz;
4

window.abc;
ƒ abc() {}

window.xyz;
4