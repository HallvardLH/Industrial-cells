/*=====================================================================================
									 HELPER FUNCTIONS
=======================================================================================*/
const byId = function(id) { // Shorthand
    return document.getElementById(id);
}

function newText(id, text) {
    byId(id).innerHTML = text;
}

function display(id) {
    byId(id).style.display = 'block';
}

function hide(id) {
    byId(id).style.display = 'none';
}

function style_left(id, value) {
    byId(id).style.left = value;
}

function style_right(id, value) {
    byId(id).style.right = value;
}

function style_bottom(id, value) {
    byId(id).style.bottom = value;
}

function style_top(id, value) {
    byId(id).style.top = value;
}

function style_height(id, value) {
    byId(id).style.height = value;
}

function style_maxHeight(id, value) {
    byId(id).style.maxHeight = value;
}

function style_shadow(id, value) {
    byId(id).style.boxShadow = value;
}

function style_transform(id, value) {
    byId(id).style.transform = value;
}

function style_color(id, value) {
    byId(id).style.color = value;
}

function style_backgroundColor(id, value) {
    byId(id).style.backgroundColor = value;
}

function style_textSize(id, value) {
    byId(id).style.fontSize = value;
}