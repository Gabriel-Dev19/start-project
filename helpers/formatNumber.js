const formatDecimalNumber = (number, style = 'long') => {
    if (style === 'long') {
        return Intl.NumberFormat('en').format(number)
    } else if (style === 'compact' && number >= 1000000) {
        return Intl.NumberFormat('en', { notation: 'compact', minimumFractionDigits: 0 }).format(number)
    } else {
        return Intl.NumberFormat('en').format(number)
    }
}

export { formatDecimalNumber };