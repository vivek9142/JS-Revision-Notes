class ListBinding {
    constructor(element){
        this.listElement = element;
        this.textList = [
            'dcode','is','not bad'
        ]
    }

    //makes an li text element tag
    static createListItem(text,i) {
        const li = document.createElement('li');
        // li.setAttribute('')
        li.innerHTML = `${text}<button >remove</button>`;

        return li;
    }

    update() {
        // remove all existing li elements tags 
        while(this.listElement.firstChild){
            console.log(this.listElement.firstChild);
            this.listElement.removeChild(this.listElement.firstChild); 
        }

        //fill ul ol tags with li
        this.textList.forEach((text,i)=>{
            this.listElement.appendChild(ListBinding.createListItem(text,i));
        })

    }

    add(text){
        this.textList.push(text);
        // this.update();
        this.listElement.appendChild(ListBinding.createListItem(text));
    }

    remove(index){
        // this.textList.splice(index,1);
        // this.update();
        this.listElement.removeChild(this.listElement.childNodes[index]);
    }
}