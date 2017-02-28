# edge-dom-render-issue
To show an issue with the EDGE browser

run `npm install` the `npm start`

Open EDGE and go to `http://localhost:8000/`

Select 1, which represents object `{ id: 1, name: 'This has an optional property', optional: "Hi, I'm optional" }`

Then select 2 which represents object `{ id: 2, name: "This doesn't have an optional property",  }`

> In EDGE you will notice that the Optinal field remains, but in Chrome it does not (which I would expect is the desired behaviour)

For other tests go back to 1, and then select 2, 3, or 4 etc.