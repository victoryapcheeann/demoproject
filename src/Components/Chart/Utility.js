import _ from 'lodash';

export function getKeys(data) {    
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