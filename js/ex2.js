const displayText400 = () => {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i++) {
    if (lis[i].className === '400level') {
      console.log(lis[i].textContent);
    }
  }
}

displayText400();
