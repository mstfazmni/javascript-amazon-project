

export function isWeekend(date) {
    const todayString= date.format('dddd');

    if(todayString === 'Saturday' || todayString === 'Sunday'){
        console.log(todayString);
    }
    else {
        console.log(false);
    }
}

