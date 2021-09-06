export default interface IMultipleJokes{
    "type": string,
    "value": {
        "id": number,
        "joke": string,
        "categories": string[]
    }[]
}