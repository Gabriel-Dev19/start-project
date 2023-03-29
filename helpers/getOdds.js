const getOdds = (item, outcomeType) => {
    return item.outcomes.find(item => {return item.outcome === outcomeType})?.odds
}

export default getOdds