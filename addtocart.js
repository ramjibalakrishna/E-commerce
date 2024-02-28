var addItemId=0;
function addtocart(item){
    addItemId+=1;
    var selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img=document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title=document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label=document.createElement('div');
    label.innerText=item.children[2].children[0].innerText;
    var select=document.createElement('span');
    select.innerText=item.children[2].children[1].value;
    label.append(select);
    var delBtn=document.createElement('button');
    delBtn.innerText='delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    
    var cartitems=document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartitems.append(selectedItem);

 }

 function del(item){
    document.getElementById(item).remove();
 }

// var additemid = 0;
//     function addtocart(item) {
//       additemid += 1;
//       var selecteditem = document.createElement('div');
//       selecteditem.classList.add('cartimg');
//       selecteditem.setAttribute('id', additemid);
//       var img = document.createElement('img');
//       img.setAttribute('src', item.children[0].currentSrc);
//       var title = document.createElement('div');
//       title.innerText = item.children[1].innerText;
//       var label = document.createElement('div');
//       label.innerText = item.children[2].children[0].innerText;
//       var select = document.createElement('span');
//       select.innerText = item.children[2].children[1].value;
//       label.append(select);
//       var delbtn = document.createElement('button');
//       delbtn.innerText = 'Clear';
//       delbtn.onclick = function(){
//         selecteditem.remove();
//       }
//       var cartitems = document.getElementById('title');
//       selecteditem.append(img);
//       selecteditem.append(title);
//       selecteditem.append(label);
//       selecteditem.append(delbtn);
//       cartitems.append(selecteditem);

//     }