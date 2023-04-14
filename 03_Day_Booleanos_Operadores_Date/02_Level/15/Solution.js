//  15.
const YYYY = now.getFullYear();
const MM = now.getMonth() +1;
const DD = now.getDate();
const HH = now.getHours();
const mm = now.getMinutes();
alert(`YYYY-MM-DD HH:mm\n${YYYY}-${MM}-${DD} ${HH}:${mm}`);
alert(`DD-MM-YYYY HH:mm\n${DD}-${MM}-${YYYY} ${HH}:${mm}`);
alert(`DD/MM/YYYY HH:mm\n${DD}/${MM}/${YYYY} ${HH}:${mm}`);