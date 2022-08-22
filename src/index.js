import * as webpackModules from '@cumcord/modules/webpack';
import { after } from '@cumcord/patcher';
import { persist } from '@cumcord/pluginData';
const patch = after;
let unpatch;

const Message = webpackModules.find((m) => m.type && m.type.displayName === 'MessageContent');

const Settings = persist.ghost

export function onLoad() {
    unpatch = patch('type', Message, () => {
        const video = (document.getElementsByTagName('video') && document.querySelectorAll("[class*='video']"));
        for (let i = 0; i < video.length; i++) {
            const element = video[i];
            const videoLink = element.getAttribute('src');
            if (videoLink != Settings.VIDEO_URL) {
                element.setAttribute('src', Settings.VIDEO_URL);
            };
        };

        const embed = document.getElementsByTagName('iframe');
        for (let i = 0; i < embed.length; i++) {
            const element = embed[i];
            const embedLink = element.getAttribute('src');
            if (embedLink.startsWith('https://www.youtube.com') && embedLink != (Settings.YT_EMBED_URL + '?autoplay=1&auto_play=1')) {
                element.setAttribute('src', (Settings.YT_EMBED_URL + '?autoplay=1&auto_play=1'))
            };
        };
    });
}

export function onUnload() {
    unpatch()
}

export { default as settings } from "./Settings";