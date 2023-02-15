export function timeLeft(started, respawnTime, timer) {
    const endsAt = started.getTime() + respawnTime
    return endsAt - timer
}

export function stringfyTime(number) {
    const str = "" + number;
    const pad = "00";
    return pad.substring(0, pad.length - str.length) + str;
}

export function convertTime(obj) {
    const h = stringfyTime(obj.getHours());
    const m = stringfyTime(obj.getMinutes());
    const s = stringfyTime(obj.getSeconds());
    return `${h}:${m}:${s}`
}

export function convertCronometer(miliseconds) {
    return new Date(miliseconds).toISOString().slice(11, 19);
}

export const noCardList = [
    1080,
    1081,
    1082,
    1083,
    1084,
    1085
]