function changeImageAndLink(myImage, linkID)
{
    // Change image source
    myImage.src = "no-photo.png"
    // window.alert(linkID);
    myImage.style.width = "70%"

    // Change image source link information
    const myLinkElement = document.getElementById(linkID);
    const newUrl = "https://www.flaticon.com/free-icons/no-photo";
    myLinkElement.innerHTML = "No photo icons created by IconMarketPK - Flaticon";
    myLinkElement.href = newUrl
    myLinkElement.title = "no photo icons"
    
}