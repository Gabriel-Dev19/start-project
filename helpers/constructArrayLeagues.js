import _ from 'lodash'

export default function constructArrayLeagues(array) {
    const newArr = array.map((data) => {
        return (
            Object.keys(data).map((gameType) => {
                return (
                    Object.keys(data[gameType]).map((game) => {
                        return (
                            Object.keys(data[gameType][game]).map(league => {
                                return { league }
                            }).flat()
                        )
                    }).flat()
                )
            }).flat()
        )
    }).flat()

    return _.uniqBy(newArr, 'league')
}