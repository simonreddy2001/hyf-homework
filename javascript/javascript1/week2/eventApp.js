const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getEventWeekday(remainingDays){
    
    const today = new Date();
    const eventDay = (today.getDay() + remainingDays) % 7;

    return weekDays[eventDay];
}