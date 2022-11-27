function writeCards(friends, message){
    let messages = []
    for (const friend of friends){
        messages.push(`Thank you, ${friend}, for the wonderful ${message} gift!`)
    }
    return messages
}

