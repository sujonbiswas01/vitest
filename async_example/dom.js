export function readerTitle(){
    const titleContainer=document.getElementById("title") || document.createElement("div")
    const titleElement=document.createElement("p")
    titleElement.textContent="testing the dom with virset"
    titleContainer.append(titleElement)
    console.log(titleContainer,"tile")
}
readerTitle()