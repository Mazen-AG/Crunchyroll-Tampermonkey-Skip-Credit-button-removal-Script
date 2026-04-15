// ==UserScript==
// @name         CrunchyRoll SkipCredit Removal
// @namespace    http://tampermonkey.net/
// @version      2026-04-15
// @description  Removing the skip credit button from the website Crunchyroll
// @author       You
// @match        *://www.crunchyroll.com/watch/*
// @icon         https://imgs.search.brave.com/BZ1otucU2u6I0uvHauQTXMmPusA_GLJe4cR0yo4_YmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MTM2MjY4NGY1OTY2/OTAwMDQ0Y2JmNzMu/cG5n
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                const button = document.querySelector('button[aria-label="Skip Credits"]');
                if (button) {
                    button.remove();
                    observer.disconnect(); // Stop once removed <-
                }
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();