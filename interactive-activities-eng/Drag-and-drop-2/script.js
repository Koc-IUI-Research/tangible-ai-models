const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
const text = document.getElementById("text");

let left = [];
let right = [];

left.push(lists[1].getElementsByTagName("h3")[0].innerText);
right.push(lists[2].firstChild.innerText);

left.push(lists[0].children[0].innerText,lists[0].children[1].innerText,lists[0].children[2].innerText,lists[0].children[4].innerText,lists[0].children[5].innerText
    ,lists[0].children[6].innerText);
right.push(lists[0].children[3].innerText,lists[0].children[7].innerText);

left = left.sort();
right = right.sort();

console.log(left);
console.log(right);


let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
        }, 0);
        check();
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
		});

		list.addEventListener('drop', function (e) {
			this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
		});
	}
}

function check(){
    if(lists[0].children.length == 0){
        console.log("afsaf");
        let l = [];
        for(let i = 0;i<lists[1].children.length;i++){
            l[i] = lists[1].children[i].innerText;
        }
        let r = [];
        l = l.sort();
        r = r.sort();
        if(l.length == left.length && r.length == right.length) console.log("1");
        for(let i = 0;i<l.length;i++){
            if(l[i] === left[i]) continue;
            else return;
        }
        for(let i = 0;i<r.length;i++){
            if(r[i] === right[i]) continue;
            else return;
        }
        text.innerText = "Tebrikler, çok başarılısın";
        document.body.style.backgroundColor = "#6bd38c"
    }
}