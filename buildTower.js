const tower = (n) => {
    const tower = []
    let width = n * 2 - 1
    for (let i = 0; i < n; i++) {
        let stars = i * 2 + 1
        let spaces = (width - stars) / 2
        tower.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces))
    }
    return tower
}


/*const tower = (n) => {
    const tower = []
    for (let i = 0; i < n; i++) {
        const row = Array(i + 1).fill('*')
        tower.push(row.join(' '))
    }
    return tower;
}*/