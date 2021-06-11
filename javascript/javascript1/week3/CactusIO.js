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
//this function returns the most time spent activity
function mostTimeSpentActivity(activities){

    //check the object which activity similar 

    //we add duration of an activity if it is similar activity ... 

    //highest duration in this collection of similar activities

    

    //return the activity name of most duration we got from above step

    let highTimeSpentActivity 
    let totalDurationInAnActivity
    for(let i=0;i<activities.length;i++){
        for(let j=0;j<activities.length;j++){
            if(i!==j && activities[i].activity==activities[j].activity){
                totalDurationInAnActivity = activities[i].duration+activities[j].duration
                highTimeSpentActivity = activities[j].activity
            }
            if(activities[i].duration>=activities[j].duration && activities[i].duration>totalDurationInAnActivity){
                highTimeSpentActivity = activities[i].activity
             }
        }
         
    }
    return highTimeSpentActivity
}
