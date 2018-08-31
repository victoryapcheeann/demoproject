import _ from 'lodash';

export function getKeysForName(data) {    
    let keys = data.map(function(value){
        return value.Name
    });
    return(keys);
};

export function getChordData(data) {
    let chemistryScore = 0;

    if (data.length > 1) {
        let teamArray = data.map(function(value){
            return value.ID
        });  

        let chemistryArray = data.map(function(value){
            return _(value.Chemistry).keyBy('ID').at(teamArray).value();
        });  

        let chordData = chemistryArray.map(function(value){
            return value.map(function(nested){
                chemistryScore = chemistryScore + nested.ChemistryPoint
                return nested.ChemistryPoint
            })
        }); 
        return[chordData, chemistryScore]
    }
    else {
        return[[], "(Please add player to see score)"]
    }
}

export function getRadarData(data) {
    if (data.length > 0) {
        let radarDataContainer = [];
        let attributeContainer = ["Strength", "Agility", "Intelligence", "Strategy", "Popularity"]

        for(let i = 0; i < attributeContainer.length; i++) {
            let radarArray = data.map(function(value){
                return {key: value.Name, value: value[attributeContainer[i]]}
            });            
            let radarData = _.chain(radarArray).keyBy('key').mapValues('value').value();
            let radarHeader = {"attribute": attributeContainer[i]}
            let radarCombined = _.merge(radarHeader, radarData);
            radarDataContainer.push(radarCombined);
        }
            return(radarDataContainer);
    }
    else {
        return([])
    }
}

export function getPieData(data) {
    if (data.length > 0) {
        let pieDataContainer = [];
        let attributeContainer = ["Strength", "Agility", "Intelligence", "Strategy", "Popularity"]
        let colorContainer = ["hsl(29, 70%, 50%)", "hsl(339, 70%, 50%)", "hsl(259, 70%, 50%)", "hsl(94, 70%, 50%)", "hsl(146, 70%, 50%)"]
        let totalScore = 0;

            for(let i=0; i<attributeContainer.length; i++){
                let Score = 0
                data.map(function(value){Score = Score + value[attributeContainer[i]]});            
                let pieID = {"id": attributeContainer[i]}
                let pieLabel = {"label": attributeContainer[i]}
                let pieValue = {"value": Score }
                let pieColor = {"color": colorContainer[i]}
                let pieData = _.merge(
                    pieID, pieLabel, pieValue, pieColor);
                pieDataContainer.push(pieData);
                totalScore += Score
            }
          
        return[pieDataContainer, totalScore]
    }
    else {
        return[[], 0]
    }
}