const makeParagraphsBold = () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
        paragraph.style.backgroundColor = 'yellow';
    });
}

makeParagraphsBold();