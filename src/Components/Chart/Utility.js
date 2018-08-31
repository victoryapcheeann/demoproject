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
        return[[], "Please add players"]
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

export function getPieDataForStats(data) {
    if (data.length > 0) {
        let pieDataContainer = [];

            let strengthScore = 0
            data.map(function(value){strengthScore = strengthScore + value.Strength});            
            let strengthID = {"id": "strength"}
            let strengthLabel = {"label": "strength"}
            let strengthValue = {"value": strengthScore }
            let strengthColor = {"color": "hsl(29, 70%, 50%)"}
            let strengthPieData = _.merge(
                strengthID, strengthLabel, strengthValue, strengthColor);
            pieDataContainer.push(strengthPieData);
            
            let agilityScore = 0
            data.map(function(value){agilityScore = agilityScore + value.Agility});            
            let agilityID = {"id": "agility"}
            let agilityLabel = {"label": "agility"}
            let agilityValue = {"value": agilityScore }
            let agilityColor = {"color": "hsl(339, 70%, 50%)"}
            let agilityPieData = _.merge(
                agilityID, agilityLabel, agilityValue, agilityColor);
            pieDataContainer.push(agilityPieData);
            
            let intelligenceScore = 0
            data.map(function(value){intelligenceScore = intelligenceScore + value.Intelligence});            
            let intelligenceID = {"id": "intelligence"}
            let intelligenceLabel = {"label": "intelligence"}
            let intelligenceValue = {"value": intelligenceScore }
            let intelligenceColor = {"color": "hsl(259, 70%, 50%)"}
            let intelligencePieData = _.merge(
                intelligenceID, intelligenceLabel, intelligenceValue, intelligenceColor);
            pieDataContainer.push(intelligencePieData);

            let strategyScore = 0
            data.map(function(value){strategyScore = strategyScore + value.Strategy});            
            let strategyID = {"id": "strategy"}
            let strategyLabel = {"label": "strategy"}
            let strategyValue = {"value": strategyScore }
            let strategyColor = {"color": "hsl(94, 70%, 50%)"}
            let strategyPieData = _.merge(
                strategyID, strategyLabel, strategyValue, strategyColor);
            pieDataContainer.push(strategyPieData);

            let popularityScore = 0
            data.map(function(value){popularityScore = popularityScore + value.Popularity});            
            let popularityID = {"id": "popularity"}
            let popularityLabel = {"label": "popularity"}
            let popularityValue = {"value": popularityScore }
            let popularityColor = {"color": "hsl(146, 70%, 50%)"}
            let popularityPieData = _.merge(
                popularityID, popularityLabel, popularityValue, popularityColor);
            pieDataContainer.push(popularityPieData);
  
        return(pieDataContainer)
    }
    else {
        return([])
    }
}