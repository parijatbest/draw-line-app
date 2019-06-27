var mySVG = $('body').connect();
mySVG.drawLine({
    left_node: '.node1',
    right_node: '.node2',
    horizantal_gap: 10,
    error: true,
    width: 1
});
$(".node1").draggable({
    drag: function (event, ui) { mySVG.redrawLines(); }
});
$(".node2").draggable({
    drag: function (event, ui) { mySVG.redrawLines(); }
});