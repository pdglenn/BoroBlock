function hideBorowitz(){
    var bwitzes = $("[title='Andy Borowitz']")
    for (var i = 0; i < bwitzes.length; i++){
        $(bwitzes[i].closest('li')).css('visibility', 'hidden');
    }
}

hideBorowitz();