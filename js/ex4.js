const addLinkToCollegeOfBusinessSite = () => {
  const li = document.createElement("li");
  li.id = 'cob';

  const link = document.createElement("a");
  link.href = "https://www.csulb.edu/college-of-business";
  link.innerText = "College of Business";
  
  li.appendChild(link);

  const links = document.querySelector("#links");
  links.insertBefore(li, links.lastElementChild);
}

addLinkToCollegeOfBusinessSite();