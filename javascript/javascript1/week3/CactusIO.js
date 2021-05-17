let activities =[]
var today = new Date();
today = mm + '/' + dd + '-' + yy;
function addActivity(date = today, activity, duration){
    let obj = {date: date,
                activity: activity,
                duration: duration}
    activities.push(obj)
}

function showStatus(activities){
    if(activities.length==0){
        return "Add some activities before calling showStatus"
    }
    let totalDuration = 0
    for(let i=0;i<activities.length;i++){
        totalDuration += activities[i].duration
    }
    return `"You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage"`
}

let totalDuration = showStatus(activities)

function usageLimit(time){
    if(totalDuration<=time){
        return "You have reached your limit, no more smartphoning for you!"
    }
}

function showStatusDate(date){
    if(activities.length==0){
        return "Add some activities before calling showStatus"
    }
    let count = 0
    for(let i=0;i<activities.length;i++){
        if(date == activities[i].date){
            count++
        }
    }
    return `"You have ${count} activities on the date ${date}"`
}
function mostSpentActivity(activities){
    let highActivity
    for(let i=0;i<activities.length;i++){
         if(activities[i].duration<activities[i+1].duration){
             highActivity = activities[i+1].activity
         }
         else{
            highActivity = activities[i].activity
         }
    }
    return highActivity
}
