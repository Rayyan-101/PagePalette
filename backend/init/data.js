const sampleData = [
    {
        "id":1,
        "name":"The Whispering Woods",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":2,
        "name":"Shadows in the Sand",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":80,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":3,
        "name":"Beyond the Horizon",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":4,
        "name":"The Last Ember",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":90,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":5,
        "name":"Echoes of Eternity",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":6,
        "name":"Journey to the Stars",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":7,
        "name":"The Forgotten City",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":60,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":8,
        "name":"Of Fire and Frost ",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":9,
        "name":"The Silent Scribe",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":10,
        "name":"Waves of Destiny",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":70,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":11,
        "name":"Veil of Illusions",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":100,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":12,
        "name":"Beneath a Pale Moon",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":75,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":13,
        "name":"The Clockmaker's Daughter",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":97,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":14,
        "name":"Dawn of the Dragon ",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":80,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":15,
        "name":"The Map of Many Realms",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":65,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":16,
        "name":"Tales from the Twilight Zone ",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":70,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":17,
        "name":"Cursed by the Sea",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":82,
        "category":"Paid",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":18,
        "name":"The Art of Solitude",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":19,
        "name":"Legends of the Lost World",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    },
    {
        "id":20,
        "name":"Mists of the Ancient Isles",
        "title":"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "price":0,
        "category":"Free",
        "image":"https://img.freepik.com/free-vector/pile-text-books-library-icon_18591-82482.jpg?t=st=1728730354~exp=1728733954~hmac=168d7cdd0f00b713ad5aea6cdf37fb19367d998648317f024f230a2dfa67fa97&w=900"
    }
]
export default {data:sampleData};
