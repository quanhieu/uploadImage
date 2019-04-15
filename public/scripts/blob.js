// $("#uploader").on("change", showImg);

function showImg(){
    console.log("change");
    let _url = window.URL || window.webkitURL;
    let file = $("#uploader")[0].files[0];
    $("#imgDisplay").attr("src", _url.createObjectURL(file));
}