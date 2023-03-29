import _ from 'lodash'

export default function constructArrayGames(array) {
    const newArr = array.map((data) => {
        return (
            Object.keys(data).map((gameType) => {
                return (
                    Object.keys(data[gameType]).map((game) => {
                        return (
                            Object.keys(data[gameType][game]).map(leagues => {
                                return (
                                    Object.keys(data[gameType][game][leagues]).map((event) => {
                                        return (
                                            Object.keys(data[gameType][game][leagues][event]).map((id) => {
                                                return (
                                                    Object.keys(data[gameType][game][leagues][event][id]).map(() => {
                                                        const infos = data[gameType][game][leagues][event][id]
                                                        return {
                                                            id: id,
                                                            league: leagues,
                                                            highlight: infos['highlight'],
                                                            typeSport: gameType,
                                                            game: game,
                                                            event: event,
                                                            matchstatus: infos['matchstatus'],
                                                            betstatus: infos['betstatus'],
                                                            date: infos['date'],
                                                            team1: infos['team1'],
                                                            team2: infos['team2'],
                                                            outcomes: infos['outcomes'],
                                                        }
                                                    })
                                                )
                                            }).flat()
                                        )
                                    }).flat()
                                )
                            }).flat()
                        )
                    }).flat()
                )
            }).flat()
        )
    }).flat()

    return _.uniqBy(newArr, 'id')
}