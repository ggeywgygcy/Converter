const dollBtn = document.getElementById('doll')
const euroBtn = document.getElementById('euro')
const chinBtn = document.getElementById('chin')
const yaponBtn = document.getElementById('yapon')
const tenBtn = document.getElementById('list')
const val = document.getElementById('exampleInputEmail1')
const group = document.getElementById('group')


dollBtn.onclick = function(res){
    res = val.value * 1.07
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    
chinBtn.onclick = function(res){
    res = val.value * 7.77
    group.textContent = res
}    
yaponBtn.onclick = function(res){
    res = val.value * 171.03
    group.textContent = res
}    
tenBtn.onclick = function(res){
    res = val.value * 499.56
    group.textContent = res
}    
euroBtn.onclick = function(res){
    res = val.value * 93.73
    group.textContent = res
    // group.insertAdjacentHTML('beforeend', vivodGruppi(res))

}    