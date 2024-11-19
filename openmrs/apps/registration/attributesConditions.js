var showOrHideOtherOccupation = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    }
    if(patient.occupation && patient.occupation.value === "Other non-coded"){
        returnValues.show.push("specifyOccupation")
    } else{
        returnValues.hide.push("specifyOccupation")
    }
    return returnValues
}

Bahmni.Registration.AttributesConditions.rules = {
    'occupation': function (patient) {
        return showOrHideOtherOccupation(patient)
    }
}