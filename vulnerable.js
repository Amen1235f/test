function getUserData(userInput) {
    const query = "SELECT * FROM users WHERE name = '" + userInput + "'";
    database.execute(query);
}
