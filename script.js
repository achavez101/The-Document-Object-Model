
// Shopping List Pertaining Videos

// video 81
// removing DOM elements

// function removeClearButton() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.remove();

// }
// function removeFirstItem() {
//     const ul = document.querySelector('ul');
//     const li = document.querySelector('li:first-child');

//     ul.removeChild(li);

// }

// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll(`li:nth-child(${itemNumber})`);

//     ul.removeChild(li);
// }

// function removeItem(itemNumber) {
//     const ul = document.querySelector('ul');
//     const li = document.querySelectorAll('li')[itemNumber - 1];

//     ul.removeChild(li);
// }

// function removeItem3(itemNumber) {
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
// }

// const removeItem4 = (itemNumber) => 
//     document.querySelectorAll[itemNumber - 1].remove();

// removeClearButton();
// // removeFirstItem();
// // removeItem2(2);
// // removeItem3(1);
// removeItem4(1);

// video 80 
// function replaceFirstItem() {
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Replaced First';

//     firstItem.replaceWith(li);
// }
// replaceFirstItem();

// function replaceSecondItem() {
//     const secondItem = document.querySelector('li:nth-child(2)');

//     secondItem.outerHTML = '<li>Replaced Second</li>';
// }

// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
//     lis.forEach((item, index) => {
//         //item.outerHTML = '<li>Replace All</li>';
//         if(index === 1) {
//             item.innerHTML = 'Second Item';
//         } else {
//             item.innerHTML = 'Replace All';
//         }
//         //item.innerHTML = 'Replace All';
//     });
//     lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>');
// }

// function replaceChildHeading() {
//     const header = document.querySelector('header');
//     const h1 = document.querySelector('header h1');

//     const h2 = document.createElement('h2');
//     h2.id = 'app-title';
//     h2.textContent = 'Shopping List';
//     header.replaceChild(h2, h1);
// }

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();

// video 79

// function insertAfter(newEl, existingEl) {
//     existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// // new element to insert
// const li = document.createElement('li');
// li.textContent = 'Insert Me After!';

// // existing element to insert after
// const firstItem = document.querySelector('li:first-child');

// // our custom function
// insertAfter(li, firstItem);


// video 78 

// insertAdjacentElement
// function insertElement() {
//     const filter = document.querySelector('.filter');

//     const h1 = document.createElement('h1');
//     h1.textContent = 'insertAdjacentElement';

//     filter.insertAdjacentElement('beforebegin', h1);
// }

// // insertAdjacentText
// function insertText() {
//     const item = document.querySelector('li:first-child');

//     item.insertAdjacentText('beforebegin', 'insertAdjacentText');
// }

// // Adjacent HTML
// function insertHTML() {
//     const clearBtn = document.querySelector('#clear');

//     clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
// }

// // Before

// function insertBeforeItem() {
//     const ul = document.querySelector('ul');

//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';

//     const thirdItem = document.querySelector('li:nth-child(3)');

//     ul.insertBefore(li, thirdItem);
// }

// insertElement();
// insertText();
// insertHTML();
// insertBeforeItem();

// video 76 & 77 code below

// function createListItem(item) {
//     const li = document.createElement('li');
//     li.innerHTML = `${item}
//     <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//     </button>`;

//     document.querySelector('.items').appendChild(li);
// }

// function createNewItem(item) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = createButton('remove-item btn-link text-red');
//     li.appendChild(button);

//     // console.log(li);
//     document.querySelector('.items').appendChild(li);
// }

// // createListItem('Eggs');

// function createButton(classes) { 
//     const button = document.createElement('button');
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);

//     return button;
// }

// function createIcon(classes) { 
//     const icon = document.createElement('i');
//     icon.className = classes;
//     return icon;
// }


// createNewItem('Cheese');
// createNewItem('Sauce');


// video 75 
// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');


// div.innerText = 'Hello World';
// const text = document.createTextNode('Hello World');
// div.appendChild(text);

// //document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

// video 72 below examples

// const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

// const listItems2 = document.getElementsByClassName('item');
// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//     console.log(item.innerText);
// });

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);

// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//      if(index === 1) { 
//          item.remove();
//      }

//      if (index === 0) {
//          item.innerHTML =  `Apples
//           <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`
//     }
// });




//video 71 below examples
//selecting an item at a time

// //document.getElementById()
// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').getAttribute('id'));


// //set attributes 
// document.getElementById('app-title').title = 'Shopping List';
// document.getElementById('app-title').setAttribute('class', 'title');

// const title = document.getElementById('app-title');
// console.log(title);

// //Get/change content
// console.log(title.textContent);
// title.textContent = 'Hello World';
// title.innerText = 'Hello Again';
// title.innerHTML = '<strong>Shopping List</strong>';

// // Change Styles
// title.style.color = 'red';
// title.style.backgroundColor = 'black';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// //document.querySelector()
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));
// console.log(document.querySelector('li:nth-child(2)').innerText);

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple Juice';
// secondItem.style.color = 'red';

// // Use methods on other elements other than document
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';

//video 70 below examples

// let output;

// output = document.all;
// output = document.all[1];
// output = document.all.length;

// output = document.documentElement;

// output = document.head;
// output = document.body;

// output = document.head.children;
// output = document.body.children;

// output = document.doctype;
// output = document.URL;
// output = document.characterSet;
// output = document.contentType;

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// //document.forms[0].id = 'new-id';

// // output = document.links;
// // output = document.links[0];
// // output = document.links[0].href;
// // output = document.links[0].href = 'https://facebook.com';
// // output = document.links[0].id = 'google-link';
// // output = document.links[0].className = 'google-class';
// // output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.array.forEach((form) => console.log(form));

// console.log(output);