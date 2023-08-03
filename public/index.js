// window.alert("Hello");

// <img
// src="no-photos.png"
// onerror="this.onerror=null;this.src='https://fallback.url/for/image.jpg'"
// />



function changeImageAndLink(myImage, linkID)
{
    myImage.src = "no-photo.png"
    // window.alert(linkID);
    myImage.style.width = "70%"

    const myLinkElement = document.getElementById(linkID);

    const newUrl = "https://www.flaticon.com/free-icons/no-photo";
    myLinkElement.innerHTML = "No photo icons created by IconMarketPK - Flaticon";
    myLinkElement.href = newUrl
    myLinkElement.title = "no photo icons"
    
}