import _ from 'lodash';

export function getKeysForName(data) {    
    let keys = data.map(function(value){
        return value.Name
    });
    return(keys);
};

export function getChordData(data) {
    if (data.length > 1) {
        let teamArray = data.map(function(value){
            return value.ID
        });  

        let chemistryArray = data.map(function(value){
            return _(value.Chemistry).keyBy('ID').at(teamArray).value();
        });  

        let chordData = chemistryArray.map(function(value){
            return value.map(function(nested){
                return nested.ChemistryPoint
            })
        }); 
        return(chordData)
    }
    else {
        return([])
    }
}

export function getChemistryScore(data) {
    let chemistryScore = 0;

    if (data.length > 0) {
        let currentTeam = data.map(function(value){
            return value.ID
        });  

        let chemistryList = data.map(function(value){
            return _(value.Chemistry).keyBy('ID').at(currentTeam).value();
        });  

        chemistryList.map(function(value){
            return value.map(function(nested){
                chemistryScore = chemistryScore + nested.ChemistryPoint
            })
        }); 
        return(chemistryScore)
    }
    else {
        return("Add Player Please")
    }
}

export function getRadarData(data) {
    if (data.length > 0) {
        let radarDataContainer = [];

            let strengthArray = data.map(function(value){
                return {key: value.Name, value: value.Strength}
            });            
            let strengthData = _.chain(strengthArray).keyBy('key').mapValues('value').value();
            let strengthHeader = {"attribute": "strength"}
            let strengthCombined = _.merge(strengthHeader, strengthData);
            radarDataContainer.push(strengthCombined);

            let agilityArray = data.map(function(value){
                return {key: value.Name, value: value.Agility}
            });            
            let agilityData = _.chain(agilityArray).keyBy('key').mapValues('value').value();
            let agilityHeader = {"attribute": "agility"}
            let agilityCombined = _.merge(agilityHeader, agilityData);
            radarDataContainer.push(agilityCombined);

            let intelligenceArray = data.map(function(value){
                return {key: value.Name, value: value.Intelligence}
            });            
            let intelligenceData = _.chain(intelligenceArray).keyBy('key').mapValues('value').value();
            let intelligenceHeader = {"attribute": "intelligence"}
            let intelligenceCombined = _.merge(intelligenceHeader, intelligenceData);
            radarDataContainer.push(intelligenceCombined);
            
            let strategyArray = data.map(function(value){
                return {key: value.Name, value: value.Strategy}
            });            
            let strategyData = _.chain(strategyArray).keyBy('key').mapValues('value').value();
            let strategyHeader = {"attribute": "strategy"}
            let strategyCombined = _.merge(strategyHeader, strategyData);
            radarDataContainer.push(strategyCombined);

            let popularityArray = data.map(function(value){
                return {key: value.Name, value: value.Popularity}
            });            
            let popularityData = _.chain(popularityArray).keyBy('key').mapValues('value').value();
            let popularityHeader = {"attribute": "popularity"}
            let popularityCombined = _.merge(popularityHeader, popularityData);
            radarDataContainer.push(popularityCombined);
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
  
            console.log(pieDataContainer)
        return(pieDataContainer)
    }
    else {
        return([])
    }
}