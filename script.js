var list = document.getElementById('demo');
var lastid = 0;
var button = document.getElementById("enter");
var input = document.getElementById('userinput');

function changeText2() {
    var userinput = document.getElementById('userinput').value;
    var entry = document.createElement('li');
    entry.setAttribute('id','item'+lastid);			// gives the item in list an id item plus the last listed id 0 + 0 = 0 next: 1 + 0 = 1 and so on
    var entryATag = document.createElement('a');
    entryATag.setAttribute('id','item'+lastid);
    entryATag.setAttribute('href', "#");
    entryATag.setAttribute('onClick','changeClass("'+'item'+lastid+'")');
    entryATag.appendChild(document.createTextNode(userinput));
    var removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode("remove"));
    removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
    entry.appendChild(entryATag);
    entry.appendChild(removeButton);
    lastid+=1;
    list.appendChild(entry);
    input.value="";
}

function changeClass(itemID){
	console.log('clicked');
	var item2 = document.getElementById(itemID);
	item2.setAttribute('class','done');
	
}

function removeName(itemid){
    var item = document.getElementById(itemid);
    list.removeChild(item);
}

function inputLength(){
	return userinput.value.length;
}

button.addEventListener("click", function button1() {
	if(inputLength() > 0){
		changeText2();
	}
})

userinput.addEventListener("keypress", function input1(event){
	if(inputLength() > 0 && event.keyCode ===13) {
		changeText2();
	}
})