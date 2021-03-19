<div align="center">

<img margin-left="auto" margin-right="auto" src="frontend/src/Crypto-Tracker.png" height="300">
</img>

## Crypto Tracks - React // Redux

</div>

### Description

A crypto-coin tracking website that uses the coingecko API.  All graphs are made using react-vis.  The data is live and updated whenever the user visits the site.  After some debugging, I realized I would have to use Promise.all in the fetch function to make sure multiple API requests are ordered correctly, regardless of how long it takes to get back the data requested. This makes sure the graph points are properly ordered according to date.

### Technologies

React, Redux

### Check it out

https://jakescudder.github.io/Crypto-Tracks/#/
