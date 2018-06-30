// Select color input
// Select size input
var height,witdh,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height,width);
    console.log("Height: " + height + " Width: " + width);
});
function makeGrid(l,w) {
    $('tr').remove();
    for(var i = 1; i <= l; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
         for(var j = 1; j <= w; j++ ){
             $('#table' + i).append('<td></td>');
         }
    }
    //allow color when one clicks
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')){
            $(this).removeAttr('style')
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
