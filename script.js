let newNum = document.querySelector("#txtNum")
let list = document.querySelector("#slctNum")
let res = document.querySelector("#res")
let listNums = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(newNum.value) && !inList(newNum.value, listNums)) {
        listNums.push(Number(newNum.value))
        let item = document.createElement("option")
        item.text = `Valor ${newNum.value} adicionado.`
        list.appendChild(item)
    } else {
        alert("Valor inválido ou já inserido na lista.")
    }
    newNum.value = " "
    newNum.focus()
    res.innerHTML = " "
} 

function finalizar() {
    if (listNums.length == 0) {
        alert("Adicione valores antes!")
        newNum.focus()
    } else {
        let totalElements = listNums.length
        let maior = listNums[0]
        let menor = listNums[0]
        let soma = 0
        let media = 0
        for (let pos in listNums) {
            soma += listNums[pos]
            if (listNums[pos] > maior) {
                maior = listNums[pos]
            }
            if (listNums[pos] < menor) {
                menor = listNums[pos]
            }
        }
        media = soma / totalElements
        res.innerHTML = " "
        res.innerHTML += `<p>Ao todo, temos ${totalElements} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}