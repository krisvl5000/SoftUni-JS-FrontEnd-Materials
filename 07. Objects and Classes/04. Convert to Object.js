function convertToObj(jsonStr) {
    let data = JSON.parse(jsonStr);
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');