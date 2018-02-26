var button = document.querySelectorAll('.glyphicon-remove');
var tr = document.querySelectorAll('#trow tr');
alert (tr.length);

for (let i=0; i<button.length;i++){
    button[i].addEventListener('click', function () {
        tr[i+1].remove();
    })
}

