
export const textFilter = (cards, text) => {
    console.log(cards);
    console.log(text);
    const newArr = cards.filter(card => {
        return card.nameRU.toLowerCase().includes(text.toLowerCase()) || card.nameEN.toLowerCase().includes(text.toLowerCase()) || card.director.toLowerCase().includes(text.toLowerCase()) || card.description.toLowerCase().includes(text.toLowerCase())
    })

    return newArr;
}

export const durationFilter = cards => {
    const newArr = cards.filter(card => {
        return card.duration < 40;
    });

    return newArr;
}

