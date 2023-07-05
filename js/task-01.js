const categoriesList = document.querySelector('#categories');
console.log(`Number of categories:`, categoriesList.children.length);

[...categoriesList.children].forEach(elem => {
    console.log(`Category: ${elem.firstElementChildtextContent}`);
    console.log(`Elements:`, elem.lastElementChild.childrenlength);
});
