/* This is the data we will be using, study it but don't change anything, yet. */



/* 
  Step 1: Write a function that will create a menu component as seen below:

    <div class="menu">
      <ul>
        {each menu item as a list item}
      </ul>
    </div>
  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> 
  element for each item in the array. Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 
  'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should 
  toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
*/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function createMenu(array){
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');
  // Structure / Classes //
  menu.appendChild(unorderedList);
  menu.classList.add('menu');
  // iterate over the array creating a list item 
  // element for each item in the array.  Add those items to the ul
  array.forEach((item) => {
    unorderedList.appendChild(document.createElement('li')).textContent = item;
  });
  // Using a DOM selector, select the menu button (the element with a class of 
  // 'menu-button') currently on the DOM.
  let menuButton = document.querySelector('.menu-button');
  // add a click event listener to the menu button. When clicked it should 
  // toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });
  //return the menu component.//
  return menu;
}
// Add the compenent to the DOM //
const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));