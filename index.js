console.log("script running..");
document.queryselector('.cross').style.display='none';
document.queryselector('.hamburger').addEventlistner("click",()=>{
    document.queryselector('sidebar').classlist.toggle('sidebar');
})