const bodyNodes = () => {
  for (let i = 0; i < document.body.childNodes.length - 1; i++) {
    console.log(document.body.childNodes[i]);
  }
}

bodyNodes();