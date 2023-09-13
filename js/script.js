let form = document.querySelector('form')
let con = document.querySelector('.con')
let todos = []

form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}

function reload(arr) {
    con.innerHTML = ""

    for (let item of arr) {
        //a
        let but = document.createElement('button')
        let span = document.createElement('span')
        let box = document.createElement('div')
        let p = document.createElement('span')
        let modal = document.createElement('div')
        let inpt = document.createElement('input')
        //b
        p.innerHTML = item.task
        span.innerHTML = item.time
        but.innerHTML = "x"
        p.classList.add('txt')
        span.classList.add('opacity')
        box.classList.add('box')
        modal.classList.add('modal')
        inpt.classList.add('text1')
        //c
        con.append(box)
        box.append(p, span, but)
        modal.append(inpt)
        //d 
        but.onclick = () => {
            todos = todos.filter(el => el.id !== item.id)
            box.classList.add('delete')
            setTimeout(() => {
                box.remove()
            }, 500);
        }

        box.ondblclick = () => {
            let modal = modal.style.display = "block"
            if (prm.length === 0) {
                box.style.color = "red"
            } else {
                box.innerHTML = inpt
                item.task = inpt
            }
        }

        
    }
}