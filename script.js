// Import elements
const searchbar = document.getElementById('searchbarInput');
const searchBtn = document.getElementById('searchBtn');

// Open DuckDuckGo with a search query
const search = () => {
    const query = searchbar.value;
    if(query === '') return;
    searchbar.value = '';
    window.open(`https://duckduckgo.com/?q=${query}`, '_self');
}

// Event handlers
searchBtn.onclick = search;
searchbar.onkeydown = key => {
    if(key.code == 'Enter') search();
}

// Quick links
const quickLinks = document.getElementsByClassName('item');
const sites = [
    'https://www.youtube.com/feed/subscriptions',
    'https://github.com',
    'https://developer.mozilla.org/en-US/',
    'https://downdetector.pl',
];

for(const i in quickLinks) {
    quickLinks[i].onclick = () => window.open(sites[i], '_self');
}
