//  1. (Único inciso)
let now = new Date();
const YYYY = now.getFullYear();
const MM = now.getMonth() +1;
const DD = now.getDate();
const HH = now.getHours();
const mm = now.getMinutes();
console.log(`YYYY-MM-DD HH:mm
${YYYY}-${MM}-${DD} ${HH < 10 ? '0' + HH: HH}:${mm < 10 ? '0' + mm: mm}`);