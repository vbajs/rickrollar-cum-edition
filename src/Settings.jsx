import { dependPersist, setDefaults, SText, SSwitch } from 'cumcord-tools';

setDefaults({
    VIDEO_URL: 'https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4',
    YT_EMBED_URL: 'https://www.youtube.com/embed/o-YBDTqX_ZU',
    SurpriseMe: true,
});

export default dependPersist(() => (
    <>
        <SText k="VIDEO_URL">
            Direct streamable URL of the video to replace all videos with.
        </SText>
        <SText k="YT_EMBED_URL">
            Youtube video embed URL to replace all youtube embeds.
        </SText>
        <SSwitch k="SurpriseMe">
            Surprise Mode: Makes it trigger only on 1 in a 50 chance; If you disable this, it is recommended to reload afterwards.
        </SSwitch>
    </>
));